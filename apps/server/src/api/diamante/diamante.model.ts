import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class DiamanteModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "diamante");
  }
}
