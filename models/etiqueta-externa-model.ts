import { EtiquetaExterna } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class EtiquetaExternaModel extends CrudObjection {
  constructor() {
    super(EtiquetaExterna);
  }
}

export const etiquetaExternaModel = new EtiquetaExternaModel();
