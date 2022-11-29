import { TFieldClient } from "../../types";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { day } from "../lib/day";

export const operacaoService = {
  async schemaDiario(): Promise<TFieldClient[]> {
    return fetcherRpc.query("operacaoDiarioSchema");
  },

  async diario(operacao: string, inicio: string, fim: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response = await fetcherRpc.query("operacaoDiario", {
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
    return fetcherRpc.query("operacaoMensalSchema");
  },

  async mensal(operacao: string, mes: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(mes)) {
      return [];
    }
    return fetcherRpc.query("operacaoMensal", { operacao, mes });
  },

  async schemaProduto(): Promise<TFieldClient[]> {
    return fetcherRpc.query("operacaoProdutoSchema");
  },

  async produto(operacao: string, data: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(data)) {
      return [];
    }
    return fetcherRpc.query("operacaoProduto", { operacao, data });
  },

  async schemaModelo(): Promise<TFieldClient[]> {
    return [
      {
        name: "modelo",
        label: "Modelo",
        primaryKey: true,
        type: "string",
      },
      {
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
    return fetcherRpc.query("operacaoModelo", { operacao, data, produto });
  },

  async schemaTurno(): Promise<TFieldClient[]> {
    return fetcherRpc.query("operacaoTurnoSchema");
  },

  async turno(operacao: string, data: string): Promise<any[]> {
    if (isEmpty(operacao) || isEmpty(data)) {
      return [];
    }
    return fetcherRpc.query("operacaoTurno", { operacao, data });
  },
};
