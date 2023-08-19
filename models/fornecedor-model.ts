import { Fornecedor } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class FornecedorModel extends CrudObjection {
  constructor() {
    super(Fornecedor);
  }
}

export const fornecedorModel = new FornecedorModel();
