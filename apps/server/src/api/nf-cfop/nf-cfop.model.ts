import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TNfCfop } from "./nf-cfop.type";

export class NfCfopModel extends Entity<TNfCfop> {
  constructor(connections: TConnections) {
    super(connections, "nf_cfop");
  }
}
