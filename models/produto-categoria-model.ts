import { ProdutoCategoria } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class ProdutoCategoriaModel extends CrudObjection {
  constructor() {
    super(ProdutoCategoria);
  }
}

export const produtoCategoriaModel = new ProdutoCategoriaModel();
