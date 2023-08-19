import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Fases extends ModelBase {
  static tableName = "Fases";
  static idColumn = ["CdFase"];

  CdFase!: number;
  NmFase!: string;
  

  static getFields() {
    return [
      "CdFase",
      "NmFase",
      ];
  }
}

Fases.knex(connections.plano);

export type TFases = ModelObject<Fases>;
