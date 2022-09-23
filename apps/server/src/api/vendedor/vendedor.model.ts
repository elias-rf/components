import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TVendedor } from "./vendedor.type";

export class VendedorModel extends Entity<TVendedor> {
  constructor(connections: TConnections) {
    super(connections, "vendedor");
  }
}
