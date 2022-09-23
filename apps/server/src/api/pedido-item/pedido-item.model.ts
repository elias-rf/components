import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TPedidoItem } from "./pedido-item.type";

export class PedidoItemModel extends Entity<TPedidoItem> {
  constructor(connections: TConnections) {
    super(connections, "pedido_item");
  }
}
