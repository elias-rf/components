import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { receber } from "./receber.table";

export function receberModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[receber.database];
  const crud = crudFactory(connection, receber);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    receber,
  };

  return model;
}
