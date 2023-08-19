import { NfEntradaLog } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class NfEntradaLogModel extends CrudObjection {
  constructor() {
    super(NfEntradaLog);
  }
}

export const nfEntradaLogModel = new NfEntradaLogModel();
