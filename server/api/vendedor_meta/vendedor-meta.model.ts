import { TVendedorMeta } from "../../../types/vendedor_meta.type";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class VendedorModel extends Entity<TVendedorMeta> {
  constructor(connections: TConnections) {
    super(connections, "vendedor");
  }
}
