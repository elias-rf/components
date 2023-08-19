import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSegurancaUsuario extends ModelBase {
  static tableName = "tbl_Seguranca_Usuario";
  static idColumn = ["kUsuario"];

  kUsuario!: number;
  NomeUsuario!: string;
  Senha!: string;
  fkGrupo!: number;
  email!: string;
  fkFuncionario!: number;
  Ativo!: number;
  hash!: string;
  nome!: string;
  setor!: string;
  nivel!: number;
  idGroup!: string;
  

  static getFields() {
    return [
      "kUsuario",
      "NomeUsuario",
      "Senha",
      "fkGrupo",
      "email",
      "fkFuncionario",
      "Ativo",
      "hash",
      "nome",
      "setor",
      "nivel",
      "idGroup",
      ];
  }
}

TblSegurancaUsuario.knex(connections.oftalmo);

export type TTblSegurancaUsuario = ModelObject<TblSegurancaUsuario>;
