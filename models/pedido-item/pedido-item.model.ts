import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { pedido_item } from "./pedido-item.table";

export function pedidoItemModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[pedido_item.database];
  const crud = crudFactory(connection, pedido_item);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    pedido_item,
  };

  return model;
}
