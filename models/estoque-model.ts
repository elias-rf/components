import { Estoque } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class EstoqueModel extends CrudObjection {
  constructor() {
    super(Estoque);
  }
}

export const estoqueModel = new EstoqueModel();
