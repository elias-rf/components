import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { empregado } from "./empregado.table";

export function empregadoModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[empregado.database];
  const crud = crudFactory(connection, empregado);

  const model = {
    connection,
    table: empregado,
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
  };

  return model;
}
