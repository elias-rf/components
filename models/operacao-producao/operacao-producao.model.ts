import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { operacao_producao } from "./operacao-producao.table";

export function operacaoProducaoModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[operacao_producao.database];
  const crud = crudFactory(connection, operacao_producao);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    operacao_producao,
  };

  return model;
}
