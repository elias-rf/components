import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ControleSerie extends ModelBase {
  static tableName = "ControleSerie";
  static idColumn = [];

  AutoNumero!: number;
  

  static getFields() {
    return [
      "AutoNumero",
      ];
  }
}

ControleSerie.knex(connections.plano);

export type TControleSerie = ModelObject<ControleSerie>;
