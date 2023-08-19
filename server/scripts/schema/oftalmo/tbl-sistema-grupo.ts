import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaGrupo extends ModelBase {
  static tableName = "tbl_Sistema_Grupo";
  static idColumn = ["kSistemaGrupo"];

  kSistemaGrupo!: number;
  DescricaoGrupo!: string;
  

  static getFields() {
    return [
      "kSistemaGrupo",
      "DescricaoGrupo",
      ];
  }
}

TblSistemaGrupo.knex(connections.oftalmo);

export type TTblSistemaGrupo = ModelObject<TblSistemaGrupo>;
