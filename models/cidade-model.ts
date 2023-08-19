import { Cidade } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class CidadeModel extends CrudObjection {
  constructor() {
    super(Cidade);
  }
}

export const cidadeModel = new CidadeModel();
