import { NfSaidaItem } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class NfSaidaItemModel extends CrudObjection {
  constructor() {
    super(NfSaidaItem);
  }
}

export const nfSaidaItemModel = new NfSaidaItemModel();
