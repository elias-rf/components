import { TConnections } from "../dal/connections";
import { TNfEntradaItem } from "../type/nf-entrada-item.type";
import { Entity } from "./entity";

export class NfEntradaItemModel extends Entity<TNfEntradaItem> {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_item");
  }
}
