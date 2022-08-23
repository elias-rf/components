import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TPedidoItem = {
  CdFilial?: string;
  CdProduto?: string;
  NumPedido?: string;
  Tipo?: string;
  Sequencia?: string;
};

export class PedidoItemModel extends EntityModel<TPedidoItem> {
  constructor(connections: TConnections) {
    super(connections, "pedidoItem");
  }
}
