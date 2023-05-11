import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { etiqueta_externa } from "./etiqueta-externa.table";

export function etiquetaExternaModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[etiqueta_externa.database];
  const crud = crudFactory(connection, etiqueta_externa);

  const model = {
    connection,
    table: etiqueta_externa,
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
  };

  return model;
}
