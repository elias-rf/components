import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class PedidoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "pedido");
  }
}
