
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { nf_entrada_item } from "./nf-entrada-item.table";
import type { TNfEntradaItemModel } from "./nf-entrada-item.type";
//#region import
//#endregion

export function nfEntradaItemModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TNfEntradaItemModel {

  const connection = connections[nf_entrada_item.database]
  const crud = crudFactory(
    connection,
    nf_entrada_item
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
    nf_entrada_item,
  } as TNfEntradaItemModel;

  return model
}

//#region other
//#endregion
