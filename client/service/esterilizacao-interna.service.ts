import { TEsterilizacaoInterna } from "../../types/esterilizacao-interna.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { day } from "../lib/day";
import { rpcFactory } from "../lib/http/rpc.factory";

export const esterilizacaoInternaService = {
  ...rpcFactory<TEsterilizacaoInterna>("esterilizacaoExterna"),

  schemaDiario() {
    return fetcherRpc.query("esterilizacaoInternaSchemaDiario");
  },

  async diario(inicio: string, fim: string): Promise<any[]> {
    if (isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response = await fetcherRpc.query("esterilizacaoInternaDiario", {
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
    return fetcherRpc.query("esterilizacaoInternaSchemaMensal");
  },

  async mensal(mes: string): Promise<any[]> {
    if (isEmpty(mes)) {
      return [];
    }
    return fetcherRpc.query("esterilizacaoInternaMensal", { mes });
  },

  schemaProduto() {
    return fetcherRpc.query("esterilizacaoInternaSchemaProduto");
  },

  async produto(data: string): Promise<any[]> {
    if (isEmpty(data)) {
      return [];
    }
    return fetcherRpc.query("esterilizacaoInternaProduto", { data });
  },

  schemaModelo() {
    return fetcherRpc.query("esterilizacaoInternaSchemaModelo");
  },

  async modelo(data: string, produto: string): Promise<any[]> {
    if (isEmpty(data) || isEmpty(produto)) {
      return [];
    }
    return fetcherRpc.query("esterilizacaoInternaModelo", {
      data,
      produto,
    });
  },
};
