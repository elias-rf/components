import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSegurancaGrupo extends ModelBase {
  static tableName = "tbl_Seguranca_Grupo";
  static idColumn = ["kGrupo"];

  kGrupo!: number;
  NomeGrupo!: string;
  

  static getFields() {
    return [
      "kGrupo",
      "NomeGrupo",
      ];
  }
}

TblSegurancaGrupo.knex(connections.oftalmo);

export type TTblSegurancaGrupo = ModelObject<TblSegurancaGrupo>;
