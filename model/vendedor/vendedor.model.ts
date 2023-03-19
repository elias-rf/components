
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { vendedor } from "./vendedor.table";
import type { TVendedorModel } from "./vendedor.type";
//#region import
//#endregion

export function vendedorModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TVendedorModel {

  const connection = connections[vendedor.database]
  const crud = crudFactory(
    connection,
    vendedor
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
    vendedor,
  } as TVendedorModel;

  return model
}

//#region other
//#endregion