import { Produto } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class ProdutoModel extends CrudObjection {
  constructor() {
    super(Produto);
  }
}

export const produtoModel = new ProdutoModel();
