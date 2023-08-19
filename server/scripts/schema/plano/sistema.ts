import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Sistema extends ModelBase {
  static tableName = "Sistema";
  static idColumn = ["CdSistema"];

  CdSistema!: string;
  NmSistema!: string;
  

  static getFields() {
    return [
      "CdSistema",
      "NmSistema",
      ];
  }
}

Sistema.knex(connections.plano);

export type TSistema = ModelObject<Sistema>;
