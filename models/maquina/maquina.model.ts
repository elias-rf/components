import { crudFactory } from "@mono/utils/crud/crud.factory";
import { TConnections } from "../connections";
import { maquina } from "./maquina.table";
import type { TMaquinaModel } from "./maquina.type";
//#region import
//#endregion

export function maquinaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TMaquinaModel {
  const connection = connections[maquina.database];
  const crud = crudFactory(connection, maquina);

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
    maquina,
  } as TMaquinaModel;

  return model;
}

//#region other
//#endregion
