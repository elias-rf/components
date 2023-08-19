import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Funcionarios extends ModelBase {
  static tableName = "Funcionarios";
  static idColumn = [];

  CdCliente!: number;
  CdFuncionario!: number;
  NmFuncionario!: string;
  Endereco!: string;
  Cidade!: string;
  Bairro!: string;
  Uf!: string;
  Cep!: number;
  NumRg!: string;
  Telefone!: string;
  DtNasc!: Date;
  VlLimite!: number;
  FgAtivo!: string;
  DtUltAlteracao!: Date;
  FgExibeLimite!: string;
  Classificacao!: string;
  FgSubsidio!: string;
  NumAgencia!: string;
  NumConta!: string;
  NumDV!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "CdFuncionario",
      "NmFuncionario",
      "Endereco",
      "Cidade",
      "Bairro",
      "Uf",
      "Cep",
      "NumRg",
      "Telefone",
      "DtNasc",
      "VlLimite",
      "FgAtivo",
      "DtUltAlteracao",
      "FgExibeLimite",
      "Classificacao",
      "FgSubsidio",
      "NumAgencia",
      "NumConta",
      "NumDV",
      ];
  }
}

Funcionarios.knex(connections.plano);

export type TFuncionarios = ModelObject<Funcionarios>;
