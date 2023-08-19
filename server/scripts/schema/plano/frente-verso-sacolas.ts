import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FrenteVersoSacolas extends ModelBase {
  static tableName = "FrenteVersoSacolas";
  static idColumn = ["CdFrenteVerso"];

  CdFrenteVerso!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdFrenteVerso",
      "Descricao",
      ];
  }
}

FrenteVersoSacolas.knex(connections.plano);

export type TFrenteVersoSacolas = ModelObject<FrenteVersoSacolas>;
