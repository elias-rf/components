
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { etiqueta_interna } from "./etiqueta-interna.table";
import type { TEtiquetaInternaModel } from "./etiqueta-interna.type";
//#region import
//#endregion

export function etiquetaInternaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TEtiquetaInternaModel {

  const connection = connections[etiqueta_interna.database]
  const crud = crudFactory(
    connection,
    etiqueta_interna
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
    etiqueta_interna,
  } as TEtiquetaInternaModel;

  return model
}

//#region other
//#endregion
