
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { etiqueta_externa } from "./etiqueta-externa.table";
import type { TEtiquetaExternaModel } from "./etiqueta-externa.type";
//#region import
//#endregion

export function etiquetaExternaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TEtiquetaExternaModel {

  const connection = connections[etiqueta_externa.database]
  const crud = crudFactory(
    connection,
    etiqueta_externa
  );

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    etiqueta_externa,
  } as TEtiquetaExternaModel;

  return model
}

//#region other
//#endregion
