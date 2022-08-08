import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type PedidoRecord = {
  CdFilial?: string;
  NumPedido?: string;
  CdEmitente?: string;
  NmFavorecido?: string;
  Nop?: string;
  Tipo?: string;
};

export class PedidoModel extends Model<PedidoRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "pedido",
      "MestrePedido",
      ["CdFilial", "NumPedido"],
      ["CdFilial", "CdEmitente", "NmFavorecido", "Nop", "NumPedido", "Tipo"]
    );
  }
}
