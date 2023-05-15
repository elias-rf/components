import type { TModels } from "@/models/models";
import type { TIds } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { isUndefined } from "lodash";
import type { TEtiquetaExterna } from "../../etiqueta-externa/etiqueta-externa.type";
import { ordem_producao } from "../ordem-producao.table";
export function etiquetaExternaFactory({ models }: { models: TModels }) {
  return async (ids: TIds) => {
    assertIds(ids, ordem_producao.fields);
    let response: TEtiquetaExterna[];
    if (isUndefined(ids[0].value)) response = [];
    response = (await models.etiquetaExterna.query.list({
      filters: [
        {
          id: "etiqueta_externa_id",
          value: ids[0].value.substring(0, 6) + "?",
        },
      ],
      sorts: [{ id: "etiqueta_externa_id", desc: false }],
    })) as TEtiquetaExterna[];
    return response;
  };
}
