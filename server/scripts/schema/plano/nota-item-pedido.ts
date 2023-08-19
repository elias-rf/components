import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaItemPedido extends ModelBase {
  static tableName = "NotaItemPedido";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Modelo!: string;
  Serie!: string;
  NumPedido!: number;
  Sequencia!: number;
  CdProduto!: string;
  Quantidade!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Modelo",
      "Serie",
      "NumPedido",
      "Sequencia",
      "CdProduto",
      "Quantidade",
      ];
  }
}

NotaItemPedido.knex(connections.plano);

export type TNotaItemPedido = ModelObject<NotaItemPedido>;
