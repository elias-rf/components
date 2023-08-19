import { NfEntradaItem } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class NfEntradaItemModel extends CrudObjection {
  constructor() {
    super(NfEntradaItem);
  }
}

export const nfEntradaItemModel = new NfEntradaItemModel();
