import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TVendedor = {
  CdVendedor?: number;
  NmVendedor?: string;
  FgAtivo?: string;
};

export class VendedorModel extends EntityModel<TVendedor> {
  constructor(connections: TConnections) {
    super(connections, "vendedor");
  }
}
