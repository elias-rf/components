import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { nf_entrada_log } from "./nf-entrada-log.table";
//#region import
//#endregion

export function nfEntradaLogModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
) {
  const connection = connections[nf_entrada_log.database];
  const crud = crudFactory(connection, nf_entrada_log);

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
    nf_entrada_log,
  };

  return model;
}

//#region other
//#endregion
