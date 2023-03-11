
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { pagar } from "./pagar.table";
import type { TPagarModel } from "./pagar.type";
//#region import
//#endregion

export function pagarModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TPagarModel {

  const connection = connections[pagar.database]
  const crud = crudFactory(
    connection,
    pagar
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
    pagar,
  } as TPagarModel;

  return model
}

//#region other
//#endregion
