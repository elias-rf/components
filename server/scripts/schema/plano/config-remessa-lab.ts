import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigRemessaLab extends ModelBase {
  static tableName = "ConfigRemessaLab";
  static idColumn = [];

  IdLayOut!: string;
  CdFabricante!: number;
  

  static getFields() {
    return [
      "IdLayOut",
      "CdFabricante",
      ];
  }
}

ConfigRemessaLab.knex(connections.plano);

export type TConfigRemessaLab = ModelObject<ConfigRemessaLab>;
