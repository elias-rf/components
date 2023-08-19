import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSegurancaPermissao extends ModelBase {
  static tableName = "tbl_Seguranca_Permissao";
  static idColumn = ["kPermissao"];

  kPermissao!: number;
  fkGrupo!: number;
  Permissao!: number;
  fkObjeto!: string;
  

  static getFields() {
    return [
      "kPermissao",
      "fkGrupo",
      "Permissao",
      "fkObjeto",
      ];
  }
}

TblSegurancaPermissao.knex(connections.oftalmo);

export type TTblSegurancaPermissao = ModelObject<TblSegurancaPermissao>;
