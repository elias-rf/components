import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Transportadoras extends ModelBase {
  static tableName = "Transportadoras";
  static idColumn = [];

  Bairro!: string;
  CdTransportadora!: number;
  CEP!: number;
  CGC!: number;
  Cidade!: string;
  Endereco!: string;
  Fax!: string;
  InscEst!: string;
  NmContato!: string;
  RzSocial!: string;
  Telefone!: string;
  UF!: string;


  static getFields() {
    return [
      "Bairro",
      "CdTransportadora",
      "CEP",
      "CGC",
      "Cidade",
      "Endereco",
      "Fax",
      "InscEst",
      "NmContato",
      "RzSocial",
      "Telefone",
      "UF",
      ];
  }
}

Transportadoras.knex(connections.plano);

export type TTransportadoras = ModelObject<Transportadoras>;
