import { ProdutoControle } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class ProdutoControleModel extends CrudObjection {
  constructor() {
    super(ProdutoControle);
  }
}

export const produtoControleModel = new ProdutoControleModel();
