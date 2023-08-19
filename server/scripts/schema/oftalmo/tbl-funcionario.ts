import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblFuncionario extends ModelBase {
  static tableName = "tbl_Funcionario";
  static idColumn = ["kFuncionario"];

  kFuncionario!: number;
  FKEmpresa!: number;
  NomeFuncionario!: string;
  IDN!: string;
  Funcao!: string;
  Afastado!: number;
  Setor!: string;
  

  static getFields() {
    return [
      "kFuncionario",
      "FKEmpresa",
      "NomeFuncionario",
      "IDN",
      "Funcao",
      "Afastado",
      "Setor",
      ];
  }
}

TblFuncionario.knex(connections.oftalmo);

export type TTblFuncionario = ModelObject<TblFuncionario>;
