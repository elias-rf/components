import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ControladosPedido extends ModelBase {
  static tableName = "ControladosPedido";
  static idColumn = [];

  CdFilial!: number;
  NumDocumento!: number;
  CdProduto!: string;
  Sequencia!: number;
  QtdePrescrita!: number;
  QtdeVendida!: number;
  CRM!: string;
  DtReceita!: Date;
  NumReceita!: number;
  CdComprador!: number;
  NomeComprador!: string;
  Endereco!: string;
  NumIdentidade!: string;
  Telefone!: string;
  TipoReceita!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDocumento",
      "CdProduto",
      "Sequencia",
      "QtdePrescrita",
      "QtdeVendida",
      "CRM",
      "DtReceita",
      "NumReceita",
      "CdComprador",
      "NomeComprador",
      "Endereco",
      "NumIdentidade",
      "Telefone",
      "TipoReceita",
      ];
  }
}

ControladosPedido.knex(connections.plano);

export type TControladosPedido = ModelObject<ControladosPedido>;
