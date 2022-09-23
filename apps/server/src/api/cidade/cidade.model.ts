import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TCidade } from "./cidade.type";

export class CidadeModel extends Entity<TCidade> {
  constructor(connections: TConnections) {
    super(connections, "cidade");
  }
}
