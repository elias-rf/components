import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoFormulaOperacaoObservacao extends ModelBase {
  static tableName = "ProducaoFormulaOperacaoObservacao";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  CdOperacao!: number;
  Observacao!: string;
  Sequencia!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "CdOperacao",
      "Observacao",
      "Sequencia",
      ];
  }
}

ProducaoFormulaOperacaoObservacao.knex(connections.plano);

export type TProducaoFormulaOperacaoObservacao = ModelObject<ProducaoFormulaOperacaoObservacao>;
