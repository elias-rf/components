import { VendedorMeta } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class VendedorMetaModel extends CrudObjection {
  constructor() {
    super(VendedorMeta);
  }
}

export const vendedorMetaModel = new VendedorMetaModel();
