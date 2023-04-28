
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { nf_cfop } from "./nf-cfop.table";
import type { TNfCfopModel } from "./nf-cfop.type";
//#region import
//#endregion

export function nfCfopModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TNfCfopModel {

  const connection = connections[nf_cfop.database]
  const crud = crudFactory(
    connection,
    nf_cfop
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
    nf_cfop,
  } as TNfCfopModel;

  return model
}

//#region other
//#endregion
