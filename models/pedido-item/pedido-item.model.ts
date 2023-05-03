import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { pedido_item } from "./pedido-item.table";
import type { TPedidoItemModel } from "./pedido-item.type";
//#region import
//#endregion

export function pedidoItemModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TPedidoItemModel {
  const connection = connections[pedido_item.database];
  const crud = crudFactory(connection, pedido_item);

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    pedido_item,
  } as TPedidoItemModel;

  return model;
}

//#region other
//#endregion
