import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class ClienteModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "cliente");
  }
}
