import { Diamante } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class DiamanteModel extends CrudObjection {
  constructor() {
    super(Diamante);
  }
}

export const diamanteModel = new DiamanteModel();
