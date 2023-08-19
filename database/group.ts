import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Group extends ModelBase {
  static tableName = "tbl_Seguranca_Grupo";
  static idColumn = "kGrupo";
  kGrupo!: number;
  NomeGrupo!: string;


  static getFields() {
    return [
      "kGrupo",
      "NomeGrupo",
      ];
  }
}

Group.knex(connections.oftalmo);

export type TGroup = ModelObject<Group>;