import isEmpty from "@/utils/is/is-empty";
import { Schema } from "../..";
import day from "../lib/day";
import fetcherRpc from "../lib/http/fetcher-rpc";

export default function EsterilizacaoExternaService() {
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

    async diario(inicio: string, fim: string): Promise<any[]> {
      if (isEmpty(inicio) || isEmpty(fim)) {
        return [];
      }
      const response = await fetcherRpc.request("esterilizacaoExternaDiario", {
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
            type: "string",
          },
        ],
      };
    },

    async mensal(mes: string): Promise<any[]> {
      if (isEmpty(mes)) {
        return [];
      }
      return fetcherRpc.request("esterilizacaoExternaMensal", { mes });
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

    async produto(data: string): Promise<any[]> {
      if (isEmpty(data)) {
        return [];
      }
      return fetcherRpc.request("esterilizacaoExternaProduto", { data });
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
            type: "string",
          },
        ],
      };
    },

    async modelo(data: string, produto: string): Promise<any[]> {
      if (isEmpty(data) || isEmpty(produto)) {
        return [];
      }
      return fetcherRpc.request("esterilizacaoExternaModelo", {
        data,
        produto,
      });
    },
  };
}
