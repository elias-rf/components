import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TPedido = {
  CdFilial?: string;
  NumPedido?: string;
  CdEmitente?: string;
  NmFavorecido?: string;
  Nop?: string;
  Tipo?: string;
};

export class PedidoModel extends EntityModel<TPedido> {
  constructor(connections: TConnections) {
    super(connections, "pedido");
  }
}
