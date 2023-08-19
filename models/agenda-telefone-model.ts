import { AgendaTelefone } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class AgendaTelefoneModel extends CrudObjection {
  constructor() {
    super(AgendaTelefone);
  }
}

export const agendaTelefoneModel = new AgendaTelefoneModel();
