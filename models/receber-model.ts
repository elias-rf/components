import { Receber } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class ReceberModel extends CrudObjection {
  constructor() {
    super(Receber);
  }
}

export const receberModel = new ReceberModel();
