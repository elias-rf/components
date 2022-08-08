import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type PedidoItemRecord = {
  CdFilial?: string;
  CdProduto?: string;
  NumPedido?: string;
  Tipo?: string;
  Sequencia?: string;
};

export class PedidoItemModel extends Model<PedidoItemRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "pedidoItem",
      "ItemPedido",
      ["CdFilial", "NumPedido"],
      ["CdFilial", "CdProduto", "NumPedido", "Tipo", "Sequencia"]
    );
  }
}
