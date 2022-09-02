import { TConnections } from "../dal/connections";
import { TPedidoItem } from "../type/pedido-item.type";
import { Entity } from "./entity";

export class PedidoItemModel extends Entity<TPedidoItem> {
  constructor(connections: TConnections) {
    super(connections, "pedido_item");
  }
}
