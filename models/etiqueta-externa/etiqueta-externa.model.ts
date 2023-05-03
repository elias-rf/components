import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { etiqueta_externa } from "./etiqueta-externa.table";
import type { TEtiquetaExternaModel } from "./etiqueta-externa.type";

export function etiquetaExternaModelFactory({
  connections,
}: {
  connections: TConnections;
}): TEtiquetaExternaModel {
  const connection = connections[etiqueta_externa.database];
  const crud = crudFactory(connection, etiqueta_externa);

  const model: TEtiquetaExternaModel = {
    connection,
    table: etiqueta_externa,
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
