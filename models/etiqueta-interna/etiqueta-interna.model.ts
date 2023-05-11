import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { etiqueta_interna } from "./etiqueta-interna.table";

export function etiquetaInternaModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[etiqueta_interna.database];
  const crud = crudFactory(connection, etiqueta_interna);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    etiqueta_interna,
  };

  return model;
}
