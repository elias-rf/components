import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSistemaProprietario extends ModelBase {
  static tableName = "tbl_Sistema_Proprietario";
  static idColumn = ["NomeEmpresa"];

  NomeEmpresa!: string;
  KEmpresa!: number;
  SiglaEmpresa!: string;
  RazaoSocial!: string;
  NomeFantasia!: string;
  Contato!: string;
  CGC!: string;
  InscEstadual!: string;
  Endereco!: string;
  Bairro!: string;
  Cidade!: string;
  Estado!: string;
  CEP!: string;
  Pais!: string;
  Telefone!: string;
  Fax!: string;
  Proprietaria!: number;
  ICMS!: number;
  Web!: string;
  

  static getFields() {
    return [
      "NomeEmpresa",
      "KEmpresa",
      "SiglaEmpresa",
      "RazaoSocial",
      "NomeFantasia",
      "Contato",
      "CGC",
      "InscEstadual",
      "Endereco",
      "Bairro",
      "Cidade",
      "Estado",
      "CEP",
      "Pais",
      "Telefone",
      "Fax",
      "Proprietaria",
      "ICMS",
      "Web",
      ];
  }
}

TblSistemaProprietario.knex(connections.oftalmo);

export type TTblSistemaProprietario = ModelObject<TblSistemaProprietario>;
