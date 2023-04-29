import { crudFactory } from "@mono/utils/crud/crud.factory";
import { TConnections } from "../connections";
import { esterilizacao_externa } from "./esterilizacao-externa.table";
import type { TEsterilizacaoExternaModel } from "./esterilizacao-externa.type";

import { esterilizacaoExternaMethods } from "./model-methods";

export function esterilizacaoExternaModelFactory({
  connections,
}: {
  connections: TConnections;
}): TEsterilizacaoExternaModel {
  const connection = connections[esterilizacao_externa.database];
  const crud = crudFactory(connection, esterilizacao_externa);
  const methods = esterilizacaoExternaMethods(connection);

  const model: TEsterilizacaoExternaModel = {
    connection,
    table: esterilizacao_externa,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
      diario: (args) => methods.query.diario(args),
      mensal: (args) => methods.query.mensal(args),
      modelo: (args) => methods.query.modelo(args),
      produto: (args) => methods.query.produto(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };

  return model;
}
