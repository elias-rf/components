import { Vendedor } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class VendedorModel extends CrudObjection {
  constructor() {
    super(Vendedor);
  }
}

export const vendedorModel = new VendedorModel();
