import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { cidade } from "./cidade.table";

export function cidadeModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[cidade.database];
  const crud = crudFactory(connection, cidade);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    cidade,
  };

  return model;
}
