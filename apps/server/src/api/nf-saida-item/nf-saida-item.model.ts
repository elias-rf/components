import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TNfSaidaItem } from "./nf-saida-item.type";

export class NfSaidaItemModel extends Entity<TNfSaidaItem> {
  constructor(connections: TConnections) {
    super(connections, "nf_saida_item");
  }
}
