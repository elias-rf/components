
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { cidade } from "./cidade.table";
import type { TCidadeModel } from "./cidade.type";
//#region import
//#endregion

export function cidadeModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TCidadeModel {

  const connection = connections[cidade.database]
  const crud = crudFactory(
    connection,
    cidade
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
    cidade,
  } as TCidadeModel;

  return model
}

//#region other
//#endregion
