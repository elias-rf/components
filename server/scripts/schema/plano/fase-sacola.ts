import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FaseSacola extends ModelBase {
  static tableName = "FaseSacola";
  static idColumn = ["CdFaseSacola"];

  CdFaseSacola!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdFaseSacola",
      "Descricao",
      ];
  }
}

FaseSacola.knex(connections.plano);

export type TFaseSacola = ModelObject<FaseSacola>;
