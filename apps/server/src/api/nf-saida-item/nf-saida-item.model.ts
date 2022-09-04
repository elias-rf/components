import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TNfSaidaItem, TNfSaidaItemId } from "./nf-saida-item.type";

export class NfSaidaItemModel extends Entity<TNfSaidaItemId, TNfSaidaItem> {
  constructor(connections: TConnections) {
    super(connections, "nf_saida_item");
  }
}
