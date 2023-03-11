import { isUndefined } from "lodash";
import { TTable } from "../../../types";
import { zIdClient } from "../../../utils/zod/z-id-client";
import {
  TEtiquetaExterna,
  TEtiquetaExternaRpc,
} from "../../etiqueta-externa/etiqueta-externa.type";
import {
  TOrdemProducaoEtiquetaExterna,
  TOrdemProducaoIds,
} from "../../ordem-producao/ordem-producao.type";

export function etiquetaExterna({
  ordem_producao,
  etiquetaExternaModel,
}: {
  ordem_producao: TTable;
  etiquetaExternaModel: TEtiquetaExternaRpc;
}): TOrdemProducaoEtiquetaExterna {
  return async ({ id }: { id: TOrdemProducaoIds }) => {
    zIdClient(id, ordem_producao.fields);

    let response: TEtiquetaExterna[];
    if (isUndefined(id.ordem_producao_id)) response = [];
    response = (await etiquetaExternaModel.query.list({
      where: [
        [
          "etiqueta_externa_id",
          "like",
          id.ordem_producao_id.substring(0, 6) + "%",
        ],
      ],
      order: [["etiqueta_externa_id", "asc"]],
    })) as TEtiquetaExterna[];
    return response;
  };
}
