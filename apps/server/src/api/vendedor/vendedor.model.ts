import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TVendedor, TVendedorId } from "./vendedor.type";

export class VendedorModel extends Entity<TVendedorId, TVendedor> {
  constructor(connections: TConnections) {
    super(connections, "vendedor");
  }
}
