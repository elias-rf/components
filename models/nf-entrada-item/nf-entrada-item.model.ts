import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { nf_entrada_item } from "./nf-entrada-item.table";
//#region import
//#endregion

export function nfEntradaItemModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
) {
  const connection = connections[nf_entrada_item.database];
  const crud = crudFactory(connection, nf_entrada_item);

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
  };

  return model;
}

//#region other
//#endregion
