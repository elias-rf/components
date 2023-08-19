import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TaxaFca extends ModelBase {
  static tableName = "TaxaFca";
  static idColumn = ["DataFca"];

  DataFca!: Date;
  IndiceFca!: number;
  

  static getFields() {
    return [
      "DataFca",
      "IndiceFca",
      ];
  }
}

TaxaFca.knex(connections.plano);

export type TTaxaFca = ModelObject<TaxaFca>;
