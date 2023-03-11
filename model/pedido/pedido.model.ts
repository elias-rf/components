
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { pedido } from "./pedido.table";
import type { TPedidoModel } from "./pedido.type";
//#region import
//#endregion

export function pedidoModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TPedidoModel {

  const connection = connections[pedido.database]
  const crud = crudFactory(
    connection,
    pedido
  );

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
    pedido,
  } as TPedidoModel;

  return model
}

//#region other
//#endregion
