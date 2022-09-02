import { TConnections } from "../dal/connections";
import { TPagar } from "../type/pagar.type";
import { Entity } from "./entity";

export class PagarModel extends Entity<TPagar> {
  constructor(connections: TConnections) {
    super(connections, "pagar");
  }
}
