import { crudFactory } from "@mono/utils/crud/crud.factory";
import { TConnections } from "../connections";
import { nf_entrada_controle } from "./nf-entrada-controle.table";
import type { TNfEntradaControleModel } from "./nf-entrada-controle.type";
//#region import
//#endregion

export function nfEntradaControleModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TNfEntradaControleModel {
  const connection = connections[nf_entrada_controle.database];
  const crud = crudFactory(connection, nf_entrada_controle);

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
    nf_entrada_controle,
  } as TNfEntradaControleModel;

  return model;
}

//#region other
//#endregion
