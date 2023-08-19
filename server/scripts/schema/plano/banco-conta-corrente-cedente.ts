import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BancoContaCorrenteCedente extends ModelBase {
  static tableName = "BancoContaCorrenteCedente";
  static idColumn = [];

  NumBanco!: number;
  NumAgencia!: number;
  NumContaCorrente!: string;
  AgCodCedente!: string;
  NmCedente!: string;
  CNPJ!: number;
  Endereco!: string;
  Numero!: number;
  Complemento!: string;
  Bairro!: string;
  Cidade!: string;
  UF!: string;
  CEP!: number;
  Telefone!: string;
  Fax!: string;
  

  static getFields() {
    return [
      "NumBanco",
      "NumAgencia",
      "NumContaCorrente",
      "AgCodCedente",
      "NmCedente",
      "CNPJ",
      "Endereco",
      "Numero",
      "Complemento",
      "Bairro",
      "Cidade",
      "UF",
      "CEP",
      "Telefone",
      "Fax",
      ];
  }
}

BancoContaCorrenteCedente.knex(connections.plano);

export type TBancoContaCorrenteCedente = ModelObject<BancoContaCorrenteCedente>;
