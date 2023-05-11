import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { produto_plano } from "./produto-plano.table";

export function produtoPlanoModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[produto_plano.database];
  const crud = crudFactory(connection, produto_plano);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    produto_plano,
  };

  return model;
}

export type TProdutoPlanoModel = ReturnType<typeof produtoPlanoModelFactory>;
