import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialContador extends ModelBase {
  static tableName = "FilialContador";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  NmContador!: string;
  NumCRC!: string;
  CPF!: number;
  CNPJ!: number;
  Endereco!: string;
  NumEndereco!: number;
  CompEndereco!: string;
  Bairro!: string;
  CdCidade!: number;
  NmCidade!: string;
  Uf!: string;
  Cep!: number;
  Telefone!: string;
  Fax!: string;
  Email!: string;
  DtUltAlteracao!: Date;
  EmailProcNfe!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NmContador",
      "NumCRC",
      "CPF",
      "CNPJ",
      "Endereco",
      "NumEndereco",
      "CompEndereco",
      "Bairro",
      "CdCidade",
      "NmCidade",
      "Uf",
      "Cep",
      "Telefone",
      "Fax",
      "Email",
      "DtUltAlteracao",
      "EmailProcNfe",
      ];
  }
}

FilialContador.knex(connections.plano);

export type TFilialContador = ModelObject<FilialContador>;
