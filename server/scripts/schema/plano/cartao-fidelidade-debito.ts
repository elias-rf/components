import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CartaoFidelidadeDebito extends ModelBase {
  static tableName = "CartaoFidelidadeDebito";
  static idColumn = [];

  CdCliente!: number;
  Sequencia!: number;
  CdProduto!: string;
  DtMovimentacao!: Date;
  Quantidade!: number;
  PontosMilhagem!: number;
  Comentarios!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "Sequencia",
      "CdProduto",
      "DtMovimentacao",
      "Quantidade",
      "PontosMilhagem",
      "Comentarios",
      ];
  }
}

CartaoFidelidadeDebito.knex(connections.plano);

export type TCartaoFidelidadeDebito = ModelObject<CartaoFidelidadeDebito>;
