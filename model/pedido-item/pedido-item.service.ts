import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TPedidoItemRpc } from "./pedido-item.type";

export const pedidoItemService = deepmerge(
  rpcFactory("pedidoItem"),
  {} as TPedidoItemRpc
);
