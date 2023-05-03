import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { diamante } from "./diamante.table";
import type { TDiamanteModel } from "./diamante.type";

export function diamanteModelFactory({
  connections,
}: {
  connections: TConnections;
}): TDiamanteModel {
  const connection = connections[diamante.database];
  const crud = crudFactory(connection, diamante);

  const model: TDiamanteModel = {
    connection,
    table: diamante,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };
  return model;
}
