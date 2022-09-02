import { TConnections } from "../dal/connections";
import { TNfSaidaItem } from "../type/nf-saida-item.type";
import { Entity } from "./entity";

export class NfSaidaItemModel extends Entity<TNfSaidaItem> {
  constructor(connections: TConnections) {
    super(connections, "nf_saida_item");
  }
}
