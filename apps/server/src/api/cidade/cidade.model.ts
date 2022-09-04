import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class CidadeModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "cidade");
  }
}
