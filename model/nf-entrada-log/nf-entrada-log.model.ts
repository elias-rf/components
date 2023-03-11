
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { nf_entrada_log } from "./nf-entrada-log.table";
import type { TNfEntradaLogModel } from "./nf-entrada-log.type";
//#region import
//#endregion

export function nfEntradaLogModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TNfEntradaLogModel {

  const connection = connections[nf_entrada_log.database]
  const crud = crudFactory(
    connection,
    nf_entrada_log
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
    nf_entrada_log,
  } as TNfEntradaLogModel;

  return model
}

//#region other
//#endregion
