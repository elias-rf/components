import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { empregado } from "./empregado.table";
import type { TEmpregadoModel } from "./empregado.type";

export function empregadoModelFactory({
  connections,
}: {
  connections: TConnections;
}): TEmpregadoModel {
  const connection = connections[empregado.database];
  const crud = crudFactory(connection, empregado);

  const model: TEmpregadoModel = {
    connection,
    table: empregado,
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
