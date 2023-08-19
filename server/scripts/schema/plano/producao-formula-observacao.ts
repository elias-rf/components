import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoFormulaObservacao extends ModelBase {
  static tableName = "ProducaoFormulaObservacao";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "Observacao",
      ];
  }
}

ProducaoFormulaObservacao.knex(connections.plano);

export type TProducaoFormulaObservacao = ModelObject<ProducaoFormulaObservacao>;
