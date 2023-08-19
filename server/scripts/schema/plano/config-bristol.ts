import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigBristol extends ModelBase {
  static tableName = "ConfigBristol";
  static idColumn = ["CdFornecedor"];

  CdFornecedor!: number;
  

  static getFields() {
    return [
      "CdFornecedor",
      ];
  }
}

ConfigBristol.knex(connections.plano);

export type TConfigBristol = ModelObject<ConfigBristol>;
