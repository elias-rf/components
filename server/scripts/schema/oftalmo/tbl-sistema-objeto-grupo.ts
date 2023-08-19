import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaObjetoGrupo extends ModelBase {
  static tableName = "tbl_Sistema_Objeto_Grupo";
  static idColumn = [];

  fkGrupo!: number;
  fkObjeto!: string;
  

  static getFields() {
    return [
      "fkGrupo",
      "fkObjeto",
      ];
  }
}

TblSistemaObjetoGrupo.knex(connections.oftalmo);

export type TTblSistemaObjetoGrupo = ModelObject<TblSistemaObjetoGrupo>;
