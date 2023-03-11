import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TPedidoRpc } from "./pedido.type";
//#region import
//#endregion

export const pedidoService = deepmerge(rpcFactory("pedido"), {
  //#region service
  //#endregion
} as TPedidoRpc);

//#region other
//#endregion
