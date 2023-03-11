//--
import { TTable } from "../../../types";
import { TEtiquetaExternaRpc } from "../../etiqueta-externa/etiqueta-externa.type";
import { etiquetaExterna } from "./etiqueta-externa";

export function ordemProducaoMethods({
  ordem_producao,
  etiquetaExternaModel,
}: {
  ordem_producao: TTable;
  etiquetaExternaModel: TEtiquetaExternaRpc;
}) {
  return {
    query: {
      etiquetaExterna: etiquetaExterna({
        ordem_producao,
        etiquetaExternaModel,
      }),
    },
  };
}
