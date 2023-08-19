import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialInscEstSubstituto extends ModelBase {
  static tableName = "FilialInscEstSubstituto";
  static idColumn = [];

  CdFilial!: number;
  UF!: string;
  InscEstSubstituto!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "UF",
      "InscEstSubstituto",
      "DtUltAlteracao",
      ];
  }
}

FilialInscEstSubstituto.knex(connections.plano);

export type TFilialInscEstSubstituto = ModelObject<FilialInscEstSubstituto>;
