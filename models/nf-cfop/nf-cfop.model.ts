import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { nf_cfop } from "./nf-cfop.table";
//#region import
//#endregion

export function nfCfopModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
) {
  const connection = connections[nf_cfop.database];
  const crud = crudFactory(connection, nf_cfop);

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
    nf_cfop,
  };

  return model;
}

//#region other
//#endregion
