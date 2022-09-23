import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TPagar } from "./pagar.type";

export class PagarModel extends Entity<TPagar> {
  constructor(connections: TConnections) {
    super(connections, "pagar");
  }
}
