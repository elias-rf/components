import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class NfSaidaItemModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "nf_saida_item");
  }
}
