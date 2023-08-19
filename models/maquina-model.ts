import { Maquina } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class MaquinaModel extends CrudObjection {
  constructor() {
    super(Maquina);
  }
}

export const maquinaModel = new MaquinaModel();
