import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ClienteEnderecoEntrega extends ModelBase {
  static tableName = "ClienteEnderecoEntrega";
  static idColumn = [];

  CdCliente!: number;
  CdEnderecoEntrega!: number;
  CdFilial!: number;
  Logradouro!: string;
  Numero!: number;
  Complemento!: string;
  Bairro!: string;
  CdCidade!: number;
  Cidade!: string;
  CEP!: number;
  UF!: string;
  Proximidades!: string;
  ContatoEntrega!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "CdEnderecoEntrega",
      "CdFilial",
      "Logradouro",
      "Numero",
      "Complemento",
      "Bairro",
      "CdCidade",
      "Cidade",
      "CEP",
      "UF",
      "Proximidades",
      "ContatoEntrega",
      ];
  }
}

ClienteEnderecoEntrega.knex(connections.plano);

export type TClienteEnderecoEntrega = ModelObject<ClienteEnderecoEntrega>;
