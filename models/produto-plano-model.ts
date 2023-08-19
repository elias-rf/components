import { ProdutoPlano } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class ProdutoPlanoModel extends CrudObjection {
  constructor() {
    super(ProdutoPlano);
  }
}

export const produtoPlanoModel = new ProdutoPlanoModel();
