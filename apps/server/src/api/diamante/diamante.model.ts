import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import type { TDiamante, TDiamanteId } from "./diamante.type";

export class DiamanteModel extends Entity<TDiamanteId, TDiamante> {
  constructor(connections: TConnections) {
    super(connections, "diamante");
  }
}
