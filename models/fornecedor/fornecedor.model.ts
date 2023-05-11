import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { fornecedor } from "./fornecedor.table";

export function fornecedorModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[fornecedor.database];
  const crud = crudFactory(connection, fornecedor);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    fornecedor,
  };

  return model;
}
