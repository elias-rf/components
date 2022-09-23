import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TDiamante } from "./diamante.type";

export class DiamanteModel extends Entity<TDiamante> {
  constructor(connections: TConnections) {
    super(connections, "diamante");
  }
}
