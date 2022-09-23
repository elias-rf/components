import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TPedido } from "./pedido.type";

export class PedidoModel extends Entity<TPedido> {
  constructor(connections: TConnections) {
    super(connections, "pedido");
  }
}
