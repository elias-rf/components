import { TEsterilizacaoExterna } from "../../types/esterilizacao-externa.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { day } from "../lib/day";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TEsterilizacaoExterna };

export const esterilizacaoExternaService = {
  ...rpcFactory<TEsterilizacaoExterna>("esterilizacaoExterna"),

  async schemaDiario(): Promise<TFieldClient[]> {
    return fetcherRpc("esterilizacaoExternaSchemaDiario");
  },

  async diario(inicio: string, fim: string): Promise<any[]> {
    if (isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response = await fetcherRpc("esterilizacaoExternaDiario", {
      inicio,
      fim,
    });
    return response.map((item: any) => {
      item.diaSemana = day.utc(item.dia).format("ddd");
      item.dia = day.utc(item.dia).format("YYYY-MM-DD");
      return item;
    });
  },

  async schemaMensal(): Promise<TFieldClient[]> {
    return fetcherRpc("esterilizacaoExternaSchemaMensal");
  },

  async mensal(mes: string): Promise<any[]> {
    if (isEmpty(mes)) {
      return [];
    }
    return fetcherRpc("esterilizacaoExternaMensal", { mes });
  },

  async schemaProduto(): Promise<TFieldClient[]> {
    return fetcherRpc("esterilizacaoExternaSchemaProduto");
  },

  async produto(data: string): Promise<any[]> {
    if (isEmpty(data)) {
      return [];
    }
    return fetcherRpc("esterilizacaoExternaProduto", { data });
  },

  async schemaModelo(): Promise<TFieldClient[]> {
    return fetcherRpc("esterilizacaoExternaSchemaModelo");
  },

  async modelo(data: string, produto: string): Promise<any[]> {
    if (isEmpty(data) || isEmpty(produto)) {
      return [];
    }
    return fetcherRpc("esterilizacaoExternaModelo", {
      data,
      produto,
    });
  },
};
