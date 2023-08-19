import { ProdutoEstatistica } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class ProdutoEstatisticaModel extends CrudObjection {
  constructor() {
    super(ProdutoEstatistica);
  }
}

export const produtoEstatisticaModel = new ProdutoEstatisticaModel();
