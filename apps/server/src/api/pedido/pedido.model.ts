import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TPedido, TPedidoId } from "./pedido.type";

export class PedidoModel extends Entity<TPedidoId, TPedido> {
  constructor(connections: TConnections) {
    super(connections, "pedido");
  }
}
