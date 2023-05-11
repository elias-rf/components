import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { pedido } from "./pedido.table";

export function pedidoModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[pedido.database];
  const crud = crudFactory(connection, pedido);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    pedido,
  };

  return model;
}
