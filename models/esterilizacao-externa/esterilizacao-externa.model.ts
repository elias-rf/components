import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { esterilizacao_externa } from "./esterilizacao-externa.table";

import { esterilizacaoExternaMethods } from "./model-methods";

export function esterilizacaoExternaModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[esterilizacao_externa.database];
  const crud = crudFactory(connection, esterilizacao_externa);
  const methods = esterilizacaoExternaMethods(connection);

  const model = {
    connection,
    table: esterilizacao_externa,
    query: {
      list: crud.query.list,
      read: crud.query.read,
      diario: methods.query.diario,
      mensal: methods.query.mensal,
      modelo: methods.query.modelo,
      produto: methods.query.produto,
    },
    mutation: {
      create: crud.mutation.create,
      update: crud.mutation.update,
      del: crud.mutation.del,
    },
  };

  return model;
}
