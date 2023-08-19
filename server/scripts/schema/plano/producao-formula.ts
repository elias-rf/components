import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoFormula extends ModelBase {
  static tableName = "ProducaoFormula";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  LoteEsterilizacao!: string;
  LoteFabricante!: string;
  QuantidadeOriginal!: number;
  IndiceRefracao20!: number;
  IndiceRefracao35!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "LoteEsterilizacao",
      "LoteFabricante",
      "QuantidadeOriginal",
      "IndiceRefracao20",
      "IndiceRefracao35",
      ];
  }
}

ProducaoFormula.knex(connections.plano);

export type TProducaoFormula = ModelObject<ProducaoFormula>;
