import isEmpty from "@/utils/is/is-empty";
import { Schema } from "../..";
import day from "../lib/day";
import fetcherRpc from "../lib/http/fetcher-rpc";

export default function OperacaoService() {
  return {
    schemaDiario(): Schema {
      return {
        pk: ["dia"],
        fields: [
          {
            field: "dia",
            label: "Dia",
            type: "ID",
          },
          {
            field: "diaSemana",
            label: "Dia Semana",
            type: "string",
          },
          {
            field: "quantidade",
            label: "Quantidade",
            type: "string",
          },
        ],
      };
    },

    async diario(
      operacao: string,
      inicio: string,
      fim: string
    ): Promise<any[]> {
      if (isEmpty(operacao) || isEmpty(inicio) || isEmpty(fim)) {
        return [];
      }
      const response = await fetcherRpc.request("operacaoDiario", {
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

    schemaMensal(): Schema {
      return {
        pk: ["mes"],
        fields: [
          {
            field: "mes",
            label: "Mês",
            type: "ID",
          },
          {
            field: "quantidade",
            label: "Quantidade",
            type: "int",
          },
        ],
      };
    },

    async mensal(operacao: string, mes: string): Promise<any[]> {
      if (isEmpty(operacao) || isEmpty(mes)) {
        return [];
      }
      return fetcherRpc.request("operacaoMensal", { operacao, mes });
    },

    schemaProduto(): Schema {
      return {
        pk: ["produto"],
        fields: [
          {
            field: "produto",
            label: "Produto",
            type: "ID",
          },
          {
            field: "quantidade",
            label: "Quantidade",
            type: "int",
          },
        ],
      };
    },

    async produto(operacao: string, data: string): Promise<any[]> {
      if (isEmpty(operacao) || isEmpty(data)) {
        return [];
      }
      return fetcherRpc.request("operacaoProduto", { operacao, data });
    },

    schemaModelo(): Schema {
      return {
        pk: ["modelo"],
        fields: [
          {
            field: "modelo",
            label: "Modelo",
            type: "ID",
          },
          {
            field: "quantidade",
            label: "Quantidade",
            type: "int",
          },
        ],
      };
    },

    async modelo(
      operacao: string,
      data: string,
      produto: string
    ): Promise<any[]> {
      if (isEmpty(operacao) || isEmpty(data) || isEmpty(produto)) {
        return [];
      }
      return fetcherRpc.request("operacaoModelo", { operacao, data, produto });
    },

    schemaTurno(): Schema {
      return {
        pk: ["turno"],
        fields: [
          {
            field: "turno",
            label: "Mês",
            type: "ID",
          },
          {
            field: "quantidade",
            label: "Quantidade",
            type: "int",
          },
        ],
      };
    },

    async turno(operacao: string, data: string): Promise<any[]> {
      if (isEmpty(operacao) || isEmpty(data)) {
        return [];
      }
      return fetcherRpc.request("operacaoTurno", { operacao, data });
    },
  };
}
