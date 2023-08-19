import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoFormulaImagem extends ModelBase {
  static tableName = "ProducaoFormulaImagem";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  Imagem!: any;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "Imagem",
      ];
  }
}

ProducaoFormulaImagem.knex(connections.plano);

export type TProducaoFormulaImagem = ModelObject<ProducaoFormulaImagem>;
