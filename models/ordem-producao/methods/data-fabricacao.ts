import { TModels } from "@/models/models";
import { TIds } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { day } from "@/utils/date/day";
import { isEmpty } from "@/utils/identify/is-empty";
import { ordem_producao } from "../ordem-producao.table";

// Retorna data de fabricacao
export function dataFabricacaoFactory({ models }: { models: TModels }) {
  return async ({ ids }: { ids: TIds }) => {
    assertIds(ids, ordem_producao.fields);
    const id = ids[0].value.toString();

    let response = await models.ordemProducaoOperacao.query.list({
      filters: [
        { id: "operacao_id", value: "3059" },
        { id: "ordem_producao_id", value: id },
      ],
      sorts: [{ id: "data_hora_inicio", desc: true }],
      select: ["data_hora_inicio"],
    });

    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await models.ordemProducaoOperacao.query.list({
        filters: [
          { id: "operacao_id", value: "3060" },
          { id: "ordem_producao_id", value: id.ordem_producao_id },
        ],
        sorts: [{ id: "data_hora_inicio", desc: true }],
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await models.ordemProducaoOperacao.query.list({
        filters: [
          { id: "operacao_id", value: "4020" },
          { id: "ordem_producao_id", value: id.ordem_producao_id },
        ],
        sorts: [{ id: "data_hora_inicio", desc: true }],
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await models.ordemProducaoOperacao.query.list({
        filters: [
          { id: "operacao_id", value: "3160" },
          { id: "ordem_producao_id", value: id.ordem_producao_id },
        ],
        sorts: [{ id: "data_hora_inicio", desc: true }],
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }

    if (Array.isArray(response) && response.length > 0) {
      return day(response[0].data_hora_inicio).format("YYYY-MM-DD");
    }
    return "";
  };
}
