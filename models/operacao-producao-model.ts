import { OperacaoProducao } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class OperacaoProducaoModel extends CrudObjection {
  constructor() {
    super(OperacaoProducao);
  }
}

export const operacaoProducaoModel = new OperacaoProducaoModel();
