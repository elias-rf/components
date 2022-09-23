import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TNfEntradaItem } from "./nf-entrada-item.type";

export class NfEntradaItemModel extends Entity<TNfEntradaItem> {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_item");
  }
}
