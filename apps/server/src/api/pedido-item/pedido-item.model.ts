import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class PedidoItemModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "pedido_item");
  }
}
