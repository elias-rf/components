import { crudFactory } from "@mono/utils/crud/crud.factory";
import type { TConnections } from "../connections";
import { pagar } from "./pagar.table";
import type { TPagarModel } from "./pagar.type";

export function pagarModelFactory({
  connections,
}: {
  connections: TConnections;
}): TPagarModel {
  const connection = connections[pagar.database];
  const crud = crudFactory(connection, pagar);

  const model: TPagarModel = {
    connection,
    table: pagar,
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
