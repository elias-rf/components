import { TConnections } from "../dal/connections";
import { TNfEntradaLog } from "../type/nf-entrada-log.type";
import { Entity } from "./entity";

export class NfEntradaLogModel extends Entity<TNfEntradaLog> {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_log");
  }
}
