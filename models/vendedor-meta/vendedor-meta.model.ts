import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { Knex } from "knex";
import { vendedor_meta } from "./vendedor-meta.table";

export function vendedorMetaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
) {
  const connection: Knex = connections[vendedor_meta.database];
  const crud = crudFactory(connection, vendedor_meta);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    vendedor_meta,
  };

  return model;
}
