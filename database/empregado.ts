import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Empregado extends ModelBase {
  static tableName = "tbl_Funcionario";
  static idColumn = "kFuncionario";

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

Empregado.knex(connections.oftalmo);

export type TEmpregado = ModelObject<Empregado>;
