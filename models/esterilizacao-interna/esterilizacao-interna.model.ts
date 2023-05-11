import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { esterilizacao_interna } from "./esterilizacao-interna.table";
import { esterilizacaoInternaMethods } from "./model-methods";

export function esterilizacaoInternaModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[esterilizacao_interna.database];
  const crud = crudFactory(connection, esterilizacao_interna);
  const methods = esterilizacaoInternaMethods(connection);

  const model = {
    connection,
    table: esterilizacao_interna,
    query: {
      list: crud.query.list,
      read: crud.query.read,
      produto: methods.query.produto,
      modelo: methods.query.modelo,
      diario: methods.query.diario,
      mensal: methods.query.mensal,
    },
    mutation: {
      create: crud.mutation.create,
      update: crud.mutation.update,
      del: crud.mutation.del,
    },
  };

  return model;
}
