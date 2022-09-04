import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class NfEntradaLogModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_log");
  }
}
