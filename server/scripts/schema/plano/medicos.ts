import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Medicos extends ModelBase {
  static tableName = "Medicos";
  static idColumn = ["CRM"];

  CRM!: string;
  NmMedico!: string;
  Especialidade!: string;
  Regiao!: string;
  Telefone!: string;
  DtUltAlteracao!: Date;
  DtNascimento!: Date;
  DtNascimentoSecretaria!: Date;
  Sexo!: string;
  Endereco!: string;
  Bairro!: string;
  CdCidade!: number;
  NmCidade!: string;
  Cep!: number;
  Uf!: string;
  Fax!: string;
  CdConsultor!: number;
  NmSecretaria!: string;
  DtVisita!: Date;
  FgAmiVida!: string;
  NumEndereco!: number;
  Complemento!: string;
  TelefoneAdicional!: string;
  Email!: string;
  FgAtivo!: string;
  EspecialidadeAux!: string;
  CGC!: number;
  FgCompoeDemandaIMS!: string;
  

  static getFields() {
    return [
      "CRM",
      "NmMedico",
      "Especialidade",
      "Regiao",
      "Telefone",
      "DtUltAlteracao",
      "DtNascimento",
      "DtNascimentoSecretaria",
      "Sexo",
      "Endereco",
      "Bairro",
      "CdCidade",
      "NmCidade",
      "Cep",
      "Uf",
      "Fax",
      "CdConsultor",
      "NmSecretaria",
      "DtVisita",
      "FgAmiVida",
      "NumEndereco",
      "Complemento",
      "TelefoneAdicional",
      "Email",
      "FgAtivo",
      "EspecialidadeAux",
      "CGC",
      "FgCompoeDemandaIMS",
      ];
  }
}

Medicos.knex(connections.plano);

export type TMedicos = ModelObject<Medicos>;
