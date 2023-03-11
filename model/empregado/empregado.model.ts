
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { empregado } from "./empregado.table";
import type { TEmpregadoModel } from "./empregado.type";
//#region import
//#endregion

export function empregadoModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TEmpregadoModel {

  const connection = connections[empregado.database]
  const crud = crudFactory(
    connection,
    empregado
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
    empregado,
  } as TEmpregadoModel;

  return model
}

//#region other
//#endregion
