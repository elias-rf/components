import { isUndefined } from "lodash";
import {
  TEtiquetaExterna,
  TEtiquetaExternaRpc,
} from "../../etiqueta-externa/etiqueta-externa.type";
import {
  TOrdemProducaoEtiquetaExterna,
  TOrdemProducaoIds,
} from "../ordem-producao.type";

export function etiquetaExternaFactory({
  etiquetaExternaModel,
}: {
  etiquetaExternaModel: TEtiquetaExternaRpc;
}): TOrdemProducaoEtiquetaExterna {
  return async ({ id }: { id: TOrdemProducaoIds }) => {
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
