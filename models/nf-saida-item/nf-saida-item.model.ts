import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { nf_saida_item } from "./nf-saida-item.table";
//#region import
//#endregion

export function nfSaidaItemModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
) {
  const connection = connections[nf_saida_item.database];
  const crud = crudFactory(connection, nf_saida_item);

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
    nf_saida_item,
  };

  return model;
}

//#region other
//#endregion
