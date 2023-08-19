import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ModEtiqExterna extends ModelBase {
  static tableName = "ModEtiqExterna";
  static idColumn = ["Codigo"];

  Codigo!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "Codigo",
      "Descricao",
      ];
  }
}

ModEtiqExterna.knex(connections.plano);

export type TModEtiqExterna = ModelObject<ModEtiqExterna>;
