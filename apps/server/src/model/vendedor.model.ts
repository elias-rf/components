import { TConnections } from "../dal/connections";
import { TVendedor } from "../type/vendedor.type";
import { Entity } from "./entity";

export class VendedorModel extends Entity<TVendedor> {
  constructor(connections: TConnections) {
    super(connections, "vendedor");
  }
}
