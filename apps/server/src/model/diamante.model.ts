import { TConnections } from "../dal/connections";
import type { TDiamante } from "../type/diamante.type";
import { Entity } from "./entity";

export class DiamanteModel extends Entity<TDiamante> {
  constructor(connections: TConnections) {
    super(connections, "diamante");
  }
}
