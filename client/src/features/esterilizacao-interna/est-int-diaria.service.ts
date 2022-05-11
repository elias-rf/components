import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";
import { Schema } from "types";
import day from "../../lib/day";

export default function OperacaoDiariaService(client: KnexRequest) {
  const service = {
    schema: async (): Promise<Schema> => ({
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
          type: "String",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "Int",
        },
      ],
    }),

    list: async (inicio: string, fim: string) => {
      if (isEmpty(inicio) || isEmpty(fim)) {
        return [];
      }
      const response = await client("oftalmo", {
        from: "tOperacaoOrdemProducao",
        select: [{ dia: "DataInicio" }],
        sum: { quantidade: "QtdConforme" },
        groupBy: [["DataInicio"]],
        orderBy: [["DataInicio", "desc"]],
        whereBetween: [["DataInicio", [inicio, fim]]],
        where: [{ raw: "fkOperacao in (3058, 3158)" }],
      });
      return response.map((item: any) => {
        item.diaSemana = day.utc(item.dia).format("ddd");
        item.dia = day.utc(item.dia).format("YYYY-MM-DD");
        return item;
      });
    },
  };
  return service;
}
