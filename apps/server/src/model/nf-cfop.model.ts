import { TConnections } from "../dal/connections";
import { TNfCfop } from "../type/nf-cfop.type";
import { Entity } from "./entity";

export class NfCfopModel extends Entity<TNfCfop> {
  constructor(connections: TConnections) {
    super(connections, "nf_cfop");
  }
}
