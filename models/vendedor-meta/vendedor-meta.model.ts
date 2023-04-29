import { crudFactory } from "@mono/utils/crud/crud.factory";
import { Knex } from "knex";
import { TConnections } from "../connections";
import { vendedor_meta } from "./vendedor-meta.table";
import type { TVendedorMetaModel } from "./vendedor-meta.type";
//#region import
//#endregion

export function vendedorMetaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TVendedorMetaModel {
  const connection: Knex = connections[vendedor_meta.database];
  const crud = crudFactory(connection, vendedor_meta);

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
    vendedor_meta,
  } as TVendedorMetaModel;

  return model;
}

//#region other
//#endregion
