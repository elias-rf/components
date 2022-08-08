import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type ProdutoCategoriaRecord = {
  CdCategoria?: string;
  NmCategoria?: string;
  CdDepartamento?: string;
};

export class ProdutoCategoriaModel extends Model<ProdutoCategoriaRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "produtoCategoria",
      "CategPro",
      ["CdCategoria"],
      ["CdCategoria", "NmCategoria", "CdDepartamento"]
    );
  }
}
