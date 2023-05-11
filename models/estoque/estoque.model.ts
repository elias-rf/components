import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { estoque } from "./estoque.table";
import { estoqueMethods } from "./model.methods";

export function estoqueModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[estoque.database];
  const crud = crudFactory(connection, estoque);
  const methods = estoqueMethods(connection, estoque);

  const model = {
    connection,
    table: estoque,
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
      increment: methods.mutation.increment,
    },
  };
  return model;
}
