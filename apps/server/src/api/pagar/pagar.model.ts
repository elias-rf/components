import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class PagarModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "pagar");
  }
}
