import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AdministradoraFilial extends ModelBase {
  static tableName = "AdministradoraFilial";
  static idColumn = [];

  CdAdministradora!: string;
  CdFilial!: number;
  

  static getFields() {
    return [
      "CdAdministradora",
      "CdFilial",
      ];
  }
}

AdministradoraFilial.knex(connections.plano);

export type TAdministradoraFilial = ModelObject<AdministradoraFilial>;
