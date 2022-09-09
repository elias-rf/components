import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class MaquinaModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "maquina");
  }
}
