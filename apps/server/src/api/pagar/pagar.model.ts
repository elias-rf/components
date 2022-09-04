import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TPagar, TPagarId } from "./pagar.type";

export class PagarModel extends Entity<TPagarId, TPagar> {
  constructor(connections: TConnections) {
    super(connections, "pagar");
  }
}
