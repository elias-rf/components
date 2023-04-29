import { day } from "@mono/utils/date/day";
import { isEmpty } from "@mono/utils/identify/is_empty";
import { TOrdemProducaoOperacaoModel } from "../../ordem-producao-operacao/ordem-producao-operacao.type";
import { TOrdemProducaoIds } from "../ordem-producao.type";

// Retorna data de fabricacao
export function dataFabricacaoFactory({
  ordemProducaoOperacaoModel,
}: {
  ordemProducaoOperacaoModel: TOrdemProducaoOperacaoModel;
}) {
  return async ({ id }: { id: TOrdemProducaoIds }) => {
    let response = await ordemProducaoOperacaoModel.query.list({
      where: [
        ["operacao_id", "=", "3059"],
        ["ordem_producao_id", "=", id.ordem_producao_id],
      ],
      order: [["data_hora_inicio", "desc"]],
      select: ["data_hora_inicio"],
    });

    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await ordemProducaoOperacaoModel.query.list({
        where: [
          ["operacao_id", "=", "3060"],
          ["ordem_producao_id", "=", id.ordem_producao_id],
        ],
        order: [["data_hora_inicio", "desc"]],
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await ordemProducaoOperacaoModel.query.list({
        where: [
          ["operacao_id", "=", "4020"],
          ["ordem_producao_id", "=", id.ordem_producao_id],
        ],
        order: [["data_hora_inicio", "desc"]],
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await ordemProducaoOperacaoModel.query.list({
        where: [
          ["operacao_id", "=", "3160"],
          ["ordem_producao_id", "=", id.ordem_producao_id],
        ],
        order: [["data_hora_inicio", "desc"]],
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
