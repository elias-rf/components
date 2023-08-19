import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Autorizacao extends ModelBase {
  static tableName = "Autorizacao";
  static idColumn = [];

  CdSistema!: string;
  CdFuncao!: string;
  SgUsuario!: string;
  

  static getFields() {
    return [
      "CdSistema",
      "CdFuncao",
      "SgUsuario",
      ];
  }
}

Autorizacao.knex(connections.plano);

export type TAutorizacao = ModelObject<Autorizacao>;
