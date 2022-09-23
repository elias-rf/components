import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TNfEntradaLog } from "./nf-entrada-log.type";

export class NfEntradaLogModel extends Entity<TNfEntradaLog> {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_log");
  }
}
