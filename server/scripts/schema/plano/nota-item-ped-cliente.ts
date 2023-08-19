import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaItemPedCliente extends ModelBase {
  static tableName = "NotaItemPedCliente";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Sequencia!: number;
  NumPedCliente!: string;
  ItemPedCliente!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Sequencia",
      "NumPedCliente",
      "ItemPedCliente",
      ];
  }
}

NotaItemPedCliente.knex(connections.plano);

export type TNotaItemPedCliente = ModelObject<NotaItemPedCliente>;
