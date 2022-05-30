import { KnexRequest } from "@/lib/knex/knex-request";
import isEmpty from "@/utils/is/is-empty";

const OperacaoMensalService = (client: KnexRequest): any => ({
  schema: async () => ({
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
        type: "Int",
      },
    ],
  }),

  list: async (operacao: string, mes: string) => {
    if (isEmpty(operacao) || isEmpty(mes)) {
      return [];
    }
    const response = await client("oftalmo", {
      from: "tOperacaoOrdemProducao",
      select: [{ raw: "CONVERT(CHAR(7),[DataInicio],120) as mes" }],
      sum: [{ quantidade: "QtdConforme" }],
      orderByRaw: ["CONVERT(CHAR(7),[DataInicio],120) desc"],
      groupByRaw: ["CONVERT(CHAR(7),[DataInicio],120)"],
      where: [["fkOperacao", operacao]],
      havingRaw: [[`CONVERT(CHAR(7),[DataInicio],120)>='${mes}'`]],
    });
    return response;
  },
});
export default OperacaoMensalService;
