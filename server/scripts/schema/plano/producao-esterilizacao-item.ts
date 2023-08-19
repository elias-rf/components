import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoEsterilizacaoItem extends ModelBase {
  static tableName = "ProducaoEsterilizacaoItem";
  static idColumn = [];

  CdFilial!: number;
  NumLoteEsterilizacao!: number;
  NumFormula!: number;
  Quantidade!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumLoteEsterilizacao",
      "NumFormula",
      "Quantidade",
      ];
  }
}

ProducaoEsterilizacaoItem.knex(connections.plano);

export type TProducaoEsterilizacaoItem = ModelObject<ProducaoEsterilizacaoItem>;
