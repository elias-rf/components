import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaObjeto extends ModelBase {
  static tableName = "tbl_Sistema_Objeto";
  static idColumn = ["kObjeto"];

  kObjeto!: string;
  NomeObjeto!: string;
  DescObjeto!: string;
  Tipo!: number;
  Resumo!: string;
  Permissao!: number;
  Ativo!: number;
  ts!: string;
  

  static getFields() {
    return [
      "kObjeto",
      "NomeObjeto",
      "DescObjeto",
      "Tipo",
      "Resumo",
      "Permissao",
      "Ativo",
      "ts",
      ];
  }
}

TblSistemaObjeto.knex(connections.oftalmo);

export type TTblSistemaObjeto = ModelObject<TblSistemaObjeto>;
