import { KnexRequest } from "@/lib/knex/knex-request";
import isEmpty from "@/utils/is/is-empty";
import day from "../lib/day";

const OperacaoDiariaService = (client: KnexRequest): any => ({
  schema: async () => ({
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

  list: async (operacao: string, inicio: string, fim: string) => {
    if (isEmpty(operacao) || isEmpty(inicio) || isEmpty(fim)) {
      return [];
    }
    const response = await client("oftalmo", {
      from: "tOperacaoOrdemProducao",
      select: [{ dia: "DataInicio" }],
      sum: [{ quantidade: "QtdConforme" }],
      orderBy: [["DataInicio", "desc"]],
      groupBy: ["DataInicio"],
      where: [["fkOperacao", operacao]],
      whereBetween: [["DataInicio", [inicio, fim]]],
    });
    return response.map((item: any) => {
      item.diaSemana = day.utc(item.dia).format("ddd");
      item.dia = day.utc(item.dia).format("YYYY-MM-DD");
      return item;
    });
  },
});
export default OperacaoDiariaService;
