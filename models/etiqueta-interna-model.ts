import { EtiquetaInterna } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class EtiquetaInternaModel extends CrudObjection {
  constructor() {
    super(EtiquetaInterna);
  }
}

export const etiquetaInternaModel = new EtiquetaInternaModel();
