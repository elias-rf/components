import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoLibFinanceiro extends ModelBase {
  static tableName = "PedidoLibFinanceiro";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  VlLiberado!: number;
  Usuario!: string;
  Data!: Date;
  UsuarioConf!: string;
  DataConf!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "VlLiberado",
      "Usuario",
      "Data",
      "UsuarioConf",
      "DataConf",
      ];
  }
}

PedidoLibFinanceiro.knex(connections.plano);

export type TPedidoLibFinanceiro = ModelObject<PedidoLibFinanceiro>;
