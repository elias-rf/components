import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AdministradoraBanco extends ModelBase {
  static tableName = "AdministradoraBanco";
  static idColumn = ["CdAdministradora"];

  CdAdministradora!: string;
  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  

  static getFields() {
    return [
      "CdAdministradora",
      "CdBanco",
      "CdAgencia",
      "NumConta",
      ];
  }
}

AdministradoraBanco.knex(connections.plano);

export type TAdministradoraBanco = ModelObject<AdministradoraBanco>;
