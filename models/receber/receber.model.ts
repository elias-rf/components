
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { receber } from "./receber.table";
import type { TReceberModel } from "./receber.type";
//#region import
//#endregion

export function receberModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TReceberModel {

  const connection = connections[receber.database]
  const crud = crudFactory(
    connection,
    receber
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
    receber,
  } as TReceberModel;

  return model
}

//#region other
//#endregion
