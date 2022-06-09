import isEmpty from "@/utils/is/is-empty";
import { Schema } from "../..";
import fetcherRpc from "../lib/http/fetcher-rpc";

const fields = [
  "LITEFLEX",
  "HILITE",
  "ENLITE",
  "METILCELULOSE",
  "CORNEAL RING",
  "ANEL CAPSULAR",
];

export default function TransferenciaService() {
  return {
    schemaDiario(): Schema {
      return {
        pk: ["dia"],
        fields: [
          {
            field: "dia",
            label: "Dia",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
          },
          {
            field: "LITEFLEX",
            label: "LiteFlex",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "HILITE",
            label: "HiLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ENLITE",
            label: "EnLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "METILCELULOSE",
            label: "Metil",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "CORNEAL RING",
            label: "Corneal Ring",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ANEL CAPSULAR",
            label: "Anel Capsular",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ],
      };
    },

    async diario(inicio: string, fim: string): Promise<any[]> {
      if (isEmpty(inicio) || isEmpty(fim)) {
        return [];
      }
      const response: any = await fetcherRpc.request("transferenciaDiario", {
        inicio,
        fim,
      });
      return response;
    },

    schemaMensal(): Schema {
      return {
        pk: ["mes"],
        fields: [
          {
            field: "mes",
            label: "Mês",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
          },
          {
            field: "LITEFLEX",
            label: "LiteFlex",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "HILITE",
            label: "HiLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ENLITE",
            label: "EnLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "METILCELULOSE",
            label: "Metil",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "CORNEAL RING",
            label: "Corneal Ring",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ANEL CAPSULAR",
            label: "Anel Capsular",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ],
      };
    },

    async mensal(mes: string): Promise<any[]> {
      if (isEmpty(mes)) {
        return [];
      }
      const response: any = await fetcherRpc.request("transferenciaMensal", {
        mes,
      });

      return response;

      if (isEmpty(response)) {
        return [];
      }
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

    async modelo(data: string): Promise<any[]> {
      if (isEmpty(data)) {
        return [];
      }
      return fetcherRpc.request("transferenciaModelo", { data });
    },
  };
}
