import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaDadosNfCe extends ModelBase {
  static tableName = "NotaDadosNFCe";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CPFCNPJDestinatario!: number;
  NomeDestinatario!: string;
  EmailDestinatario!: string;
  Endereco!: string;
  NumEndereco!: string;
  Complemento!: string;
  Bairro!: string;
  Cidade!: string;
  CdCidade!: string;
  Uf!: string;
  Cep!: string;
  Telefone!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CPFCNPJDestinatario",
      "NomeDestinatario",
      "EmailDestinatario",
      "Endereco",
      "NumEndereco",
      "Complemento",
      "Bairro",
      "Cidade",
      "CdCidade",
      "Uf",
      "Cep",
      "Telefone",
      ];
  }
}

NotaDadosNfCe.knex(connections.plano);

export type TNotaDadosNfCe = ModelObject<NotaDadosNfCe>;
