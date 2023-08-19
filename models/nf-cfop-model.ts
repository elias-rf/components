import { NfCfop } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class NfCfopModel extends CrudObjection {
  constructor() {
    super(NfCfop);
  }
}

export const nfCfopModel = new NfCfopModel();
