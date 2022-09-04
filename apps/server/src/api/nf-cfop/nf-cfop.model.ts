import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TNfCfop, TNfCfopId } from "./nf-cfop.type";

export class NfCfopModel extends Entity<TNfCfopId, TNfCfop> {
  constructor(connections: TConnections) {
    super(connections, "nf_cfop");
  }
}
