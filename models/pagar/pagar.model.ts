import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { pagar } from "./pagar.table";

export function pagarModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[pagar.database];
  const crud = crudFactory(connection, pagar);

  const model = {
    connection,
    table: pagar,
    query: {
      list: crud.query.list,
      read: crud.query.read,
    },
    mutation: {
      ...crud.mutation,
    },
  };

  return model;
}
