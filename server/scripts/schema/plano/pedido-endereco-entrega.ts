import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoEnderecoEntrega extends ModelBase {
  static tableName = "PedidoEnderecoEntrega";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  CdEnderecoEntrega!: number;
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
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "CdEnderecoEntrega",
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

PedidoEnderecoEntrega.knex(connections.plano);

export type TPedidoEnderecoEntrega = ModelObject<PedidoEnderecoEntrega>;
