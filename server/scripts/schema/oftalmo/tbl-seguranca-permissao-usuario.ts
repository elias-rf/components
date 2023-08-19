import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSegurancaPermissaoUsuario extends ModelBase {
  static tableName = "tbl_Seguranca_Permissao_Usuario";
  static idColumn = [];

  kPermissao!: number;
  fkObjeto!: string;
  fkUsuario!: number;
  Permissao!: number;
  actions!: string;
  

  static getFields() {
    return [
      "kPermissao",
      "fkObjeto",
      "fkUsuario",
      "Permissao",
      "actions",
      ];
  }
}

TblSegurancaPermissaoUsuario.knex(connections.oftalmo);

export type TTblSegurancaPermissaoUsuario = ModelObject<TblSegurancaPermissaoUsuario>;
