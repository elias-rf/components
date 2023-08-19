import { Pagar } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class PagarModel extends CrudObjection {
  constructor() {
    super(Pagar);
  }
}

export const pagarModel = new PagarModel();
