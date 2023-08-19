import { Empregado } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class EmpregadoModel extends CrudObjection {
  constructor() {
    super(Empregado);
  }
}

export const empregadoModel = new EmpregadoModel();
