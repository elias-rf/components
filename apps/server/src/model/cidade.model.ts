import { TConnections } from "../dal/connections";
import { TCidade } from "../type/cidade.type";
import { Entity } from "./entity";

export class CidadeModel extends Entity<TCidade> {
  constructor(connections: TConnections) {
    super(connections, "cidade");
  }
}
