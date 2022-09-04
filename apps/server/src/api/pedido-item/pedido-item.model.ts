import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TPedidoItem, TPedidoItemId } from "./pedido-item.type";

export class PedidoItemModel extends Entity<TPedidoItemId, TPedidoItem> {
  constructor(connections: TConnections) {
    super(connections, "pedido_item");
  }
}
