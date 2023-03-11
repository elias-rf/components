
import deepmerge from "ts-deepmerge";
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { diamante } from "./diamante.table";
import type { TDiamanteModel } from "./diamante.type";
//#region import
//#endregion

export function diamanteModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TDiamanteModel {

  const connection = connections[diamante.database]
  const crud = crudFactory(
    connection,
    diamante
  );

  //#region def
  //#endregion

  return deepmerge(
    { connection, diamante },
    crud,
    //#region query
      //#endregion
  );

}

//#region other
//#endregion
