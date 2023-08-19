import { NfEntradaControle } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class NfEntradaControleModel extends CrudObjection {
  constructor() {
    super(NfEntradaControle);
  }
}

export const nfEntradaControleModel = new NfEntradaControleModel();
