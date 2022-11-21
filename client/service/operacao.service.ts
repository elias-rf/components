import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { day } from "../lib/day";

export const operacaoService = {
  async schemaDiario(): Promise<TFieldClient[]> {
    return fetcherRpc("operacaoDiarioSchema");
  },

  async diario(operacao: string, inicio: string, fim: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response = await fetcherRpc("operacaoDiario", {
      operacao,
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
    return fetcherRpc("operacaoMensalSchema");
  },

  async mensal(operacao: string, mes: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(mes)) {
      return [];
    }
    return fetcherRpc("operacaoMensal", { operacao, mes });
  },

  async schemaProduto(): Promise<TFieldClient[]> {
    return fetcherRpc("operacaoProdutoSchema");
  },

  async produto(operacao: string, data: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(data)) {
      return [];
    }
    return fetcherRpc("operacaoProduto", { operacao, data });
  },

  async schemaModelo(): Promise<TFieldClient[]> {
    return [
      {
        field: "modelo",
        name: "modelo",
        label: "Modelo",
        type: "string",
      },
      {
        field: "quantidade",
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ];
  },

  async modelo(
    operacao: string,
    data: string,
    produto: string
  ): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(data) || isEmpty(produto)) {
      return [];
    }
    return fetcherRpc("operacaoModelo", { operacao, data, produto });
  },

  async schemaTurno(): Promise<TFieldClient[]> {
    return fetcherRpc("operacaoTurnoSchema");
  },

  async turno(operacao: string, data: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(data)) {
      return [];
    }
    return fetcherRpc("operacaoTurno", { operacao, data });
  },
};
