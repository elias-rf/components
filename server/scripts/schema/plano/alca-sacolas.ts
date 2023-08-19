import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AlcaSacolas extends ModelBase {
  static tableName = "AlcaSacolas";
  static idColumn = ["CdAlca"];

  CdAlca!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdAlca",
      "Descricao",
      ];
  }
}

AlcaSacolas.knex(connections.plano);

export type TAlcaSacolas = ModelObject<AlcaSacolas>;
