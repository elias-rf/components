import { Schema } from "../../../types";
import { isEmpty } from "../../../utils";
import { day } from "../lib/day";
import { fetcherRpc } from "../lib/http/fetcher-rpc";

export const esterilizacaoExternaService = {
  async schemaDiario(): Promise<Schema> {
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

  async schemaMensal(): Promise<Schema> {
    return fetcherRpc("esterilizacaoExternaSchemaMensal");
  },

  async mensal(mes: string): Promise<any[]> {
    if (isEmpty(mes)) {
      return [];
    }
    return fetcherRpc("esterilizacaoExternaMensal", { mes });
  },

  async schemaProduto(): Promise<Schema> {
    return fetcherRpc("esterilizacaoExternaSchemaProduto");
  },

  async produto(data: string): Promise<any[]> {
    if (isEmpty(data)) {
      return [];
    }
    return fetcherRpc("esterilizacaoExternaProduto", { data });
  },

  async schemaModelo(): Promise<Schema> {
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
