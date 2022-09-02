import { TConnections } from "../dal/connections";
import { TPedido } from "../type/pedido.type";
import { Entity } from "./entity";

export class PedidoModel extends Entity<TPedido> {
  constructor(connections: TConnections) {
    super(connections, "pedido");
  }
}
