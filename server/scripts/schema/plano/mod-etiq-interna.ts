import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ModEtiqInterna extends ModelBase {
  static tableName = "ModEtiqInterna";
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

ModEtiqInterna.knex(connections.plano);

export type TModEtiqInterna = ModelObject<ModEtiqInterna>;
