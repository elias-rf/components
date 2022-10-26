import { TEsterilizacaoInterna } from "../../types/esterilizacao-interna.type";
import { isEmpty } from "../../utils/identify/is-empty";
import { day } from "../lib/day";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

export const esterilizacaoInternaService = {
  ...rpcFactory<TEsterilizacaoInterna>("esterilizacaoExterna"),

  schemaDiario() {
    return fetcherRpc("esterilizacaoInternaSchemaDiario");
  },

  async diario(inicio: string, fim: string): Promise<any[]> {
    if (isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response = await fetcherRpc("esterilizacaoInternaDiario", {
      inicio,
      fim,
    });
    return response.map((item: any) => {
      item.diaSemana = day.utc(item.dia).format("ddd");
      item.dia = day.utc(item.dia).format("YYYY-MM-DD");
      return item;
    });
  },

  schemaMensal() {
    return fetcherRpc("esterilizacaoInternaSchemaMensal");
  },

  async mensal(mes: string): Promise<any[]> {
    if (isEmpty(mes)) {
      return [];
    }
    return fetcherRpc("esterilizacaoInternaMensal", { mes });
  },

  schemaProduto() {
    return fetcherRpc("esterilizacaoInternaSchemaProduto");
  },

  async produto(data: string): Promise<any[]> {
    if (isEmpty(data)) {
      return [];
    }
    return fetcherRpc("esterilizacaoInternaProduto", { data });
  },

  schemaModelo() {
    return fetcherRpc("esterilizacaoInternaSchemaModelo");
  },

  async modelo(data: string, produto: string): Promise<any[]> {
    if (isEmpty(data) || isEmpty(produto)) {
      return [];
    }
    return fetcherRpc("esterilizacaoInternaModelo", {
      data,
      produto,
    });
  },
};
