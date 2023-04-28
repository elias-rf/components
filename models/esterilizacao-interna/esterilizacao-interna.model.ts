import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { esterilizacao_interna } from "./esterilizacao-interna.table";
import type { TEsterilizacaoInternaModel } from "./esterilizacao-interna.type";
import { esterilizacaoInternaMethods } from "./model-methods";

export function esterilizacaoInternaModelFactory({
  connections,
}: {
  connections: TConnections;
}): TEsterilizacaoInternaModel {
  const connection = connections[esterilizacao_interna.database];
  const crud = crudFactory(connection, esterilizacao_interna);
  const methods = esterilizacaoInternaMethods(connection);

  const model: TEsterilizacaoInternaModel = {
    connection,
    table: esterilizacao_interna,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
      produto: (args) => methods.query.produto(args),
      modelo: (args) => methods.query.modelo(args),
      diario: (args) => methods.query.diario(args),
      mensal: (args) => methods.query.mensal(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };

  return model;
}
