import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type ProdutoItemRecord = {
  kProdutoItem?: string;
  NomeProdutoItem?: string;
  fkProduto?: string;
  idVisiontech?: string; // código do produto no Plano
};

export class ProdutoItemModel extends Model<ProdutoItemRecord> {
  constructor(connections: Connections) {
    super(
      connections.oftalmo,
      "produtoItem",
      "tbl_Produto_Item",
      ["kProdutoItem"],
      ["kProdutoItem", "NomeProdutoItem", "fkProduto", "idVisiontech"]
    );
  }
}
