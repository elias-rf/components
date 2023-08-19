import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Emitentes extends ModelBase {
  static tableName = "Emitentes";
  static idColumn = [];

  CdTipoEmitente!: number;
  CdEmitente!: number;
  RzSocial!: string;
  Endereco!: string;
  Bairro!: string;
  Cidade!: string;
  Uf!: string;
  Cep!: number;
  Cgc!: number;
  InscEst!: string;
  Telefone!: string;
  Fax!: string;
  NmContato!: string;
  PercComissao!: number;
  FgAtivo!: string;
  FgAcertoParcial!: string;
  NmFantasia!: string;
  Email!: string;
  EmailNfe!: string;
  

  static getFields() {
    return [
      "CdTipoEmitente",
      "CdEmitente",
      "RzSocial",
      "Endereco",
      "Bairro",
      "Cidade",
      "Uf",
      "Cep",
      "Cgc",
      "InscEst",
      "Telefone",
      "Fax",
      "NmContato",
      "PercComissao",
      "FgAtivo",
      "FgAcertoParcial",
      "NmFantasia",
      "Email",
      "EmailNfe",
      ];
  }
}

Emitentes.knex(connections.plano);

export type TEmitentes = ModelObject<Emitentes>;
