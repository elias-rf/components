import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSegurancaUsuarioGrupo extends ModelBase {
  static tableName = "tbl_Seguranca_UsuarioGrupo";
  static idColumn = [];

  fkNomeUsuario!: string;
  fkGrupo!: number;
  

  static getFields() {
    return [
      "fkNomeUsuario",
      "fkGrupo",
      ];
  }
}

TblSegurancaUsuarioGrupo.knex(connections.oftalmo);

export type TTblSegurancaUsuarioGrupo = ModelObject<TblSegurancaUsuarioGrupo>;
