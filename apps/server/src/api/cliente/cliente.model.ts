import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class ClienteModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "cliente");
  }
}
