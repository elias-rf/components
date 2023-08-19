import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VersaoLiberada extends ModelBase {
  static tableName = "VersaoLiberada";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Versao!: string;
  Release!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Versao",
      "Release",
      ];
  }
}

VersaoLiberada.knex(connections.plano);

export type TVersaoLiberada = ModelObject<VersaoLiberada>;
