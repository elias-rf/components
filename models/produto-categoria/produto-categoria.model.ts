import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { produto_categoria } from "./produto-categoria.table";

export function produtoCategoriaModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[produto_categoria.database];
  const crud = crudFactory(connection, produto_categoria);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    produto_categoria,
  };

  return model;
}
