import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { produto_controle } from "./produto-controle.table";

export function produtoControleModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[produto_controle.database];
  const crud = crudFactory(connection, produto_controle);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    produto_controle,
  };

  return model;
}
