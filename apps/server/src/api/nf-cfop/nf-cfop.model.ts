import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class NfCfopModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "nf_cfop");
  }
}
