import { TIds } from "@/types";
import { isUndefined } from "lodash";
import {
  TEtiquetaExterna,
  TEtiquetaExternaRpc,
} from "../../etiqueta-externa/etiqueta-externa.type";

export function etiquetaExternaFactory({
  etiquetaExternaModel,
}: {
  etiquetaExternaModel: TEtiquetaExternaRpc;
}) {
  return async (id: TIds) => {
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
