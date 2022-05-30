import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";
import { Schema } from "../..";

const EstIntMensalService = (client: KnexRequest) => ({
  schema: async (): Promise<Schema> => ({
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
  }),

  list: async (mes: string) => {
    if (isEmpty(mes)) {
      return [];
    }
    const response = await client("oftalmo", {
      from: "tOperacaoOrdemProducao",
      select: [{ raw: "CONVERT(CHAR(7),[DataInicio],120) AS mes" }],
      sum: { quantidade: "tOperacaoOrdemProducao.QtdConforme" },
      groupByRaw: [["CONVERT(CHAR(7),[DataInicio],120)"]],
      orderByRaw: [["CONVERT(CHAR(7),[DataInicio],120) desc"]],
      whereRaw: [
        ["fkOperacao in (3058, 3158)"],
        ["CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]],
      ],
    });
    return response;
  },
});
export default EstIntMensalService;
