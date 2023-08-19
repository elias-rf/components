import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParamContVer extends ModelBase {
  static tableName = "ParamContVer";
  static idColumn = [];

  Ver01!: string;
  Ver02!: string;
  Ver03!: string;
  

  static getFields() {
    return [
      "Ver01",
      "Ver02",
      "Ver03",
      ];
  }
}

ParamContVer.knex(connections.plano);

export type TParamContVer = ModelObject<ParamContVer>;
