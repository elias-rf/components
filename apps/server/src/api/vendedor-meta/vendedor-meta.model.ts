import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TVendedorMeta } from "./vendedor-meta.type";

export class VendedorModel extends Entity<TVendedorMeta> {
  constructor(connections: TConnections) {
    super(connections, "vendedor");
  }
}
