import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type VendedorRecord = {
  CdVendedor?: number;
  NmVendedor?: string;
  FgAtivo?: string;
};

export class VendedorModel extends Model<VendedorRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "vendedor",
      "CadVen",
      ["CdVendedor"],
      ["CdVendedor", "NmVendedor", "FgAtivo"]
    );
  }
}
