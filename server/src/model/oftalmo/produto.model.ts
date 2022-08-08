import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type ProdutoRecord = {
  kProduto?: string;
  fkCategoria?: string;
  NomeComercial?: string;
};

export class ProdutoModel extends Model<ProdutoRecord> {
  constructor(connections: Connections) {
    super(
      connections.oftalmo,
      "produto",
      "tbl_Produto",
      ["kProduto"],
      ["kProduto", "fkCategoria", "NomeComercial"]
    );
  }
}
