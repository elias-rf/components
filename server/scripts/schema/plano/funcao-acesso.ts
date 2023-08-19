import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FuncaoAcesso extends ModelBase {
  static tableName = "FuncaoAcesso";
  static idColumn = [];

  CdSistema!: string;
  CdFuncao!: string;
  NmFuncao!: string;
  

  static getFields() {
    return [
      "CdSistema",
      "CdFuncao",
      "NmFuncao",
      ];
  }
}

FuncaoAcesso.knex(connections.plano);

export type TFuncaoAcesso = ModelObject<FuncaoAcesso>;
