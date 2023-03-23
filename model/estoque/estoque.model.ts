import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { estoque } from "./estoque.table";
import type { TEstoqueModel } from "./estoque.type";
import { estoqueMethods } from "./model.methods";

export function estoqueModelFactory({
  connections,
}: {
  connections: TConnections;
}): TEstoqueModel {
  const connection = connections[estoque.database];
  const crud = crudFactory(connection, estoque);
  const methods = estoqueMethods(connection, estoque);

  const model: TEstoqueModel = {
    connection,
    table: estoque,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
      increment: (args) => methods.mutation.increment(args),
    },
  };

  return model;
}
