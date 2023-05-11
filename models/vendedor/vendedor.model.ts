import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { vendedor } from "./vendedor.table";

export function vendedorModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[vendedor.database];
  const crud = crudFactory(connection, vendedor);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    vendedor,
  };

  return model;
}
