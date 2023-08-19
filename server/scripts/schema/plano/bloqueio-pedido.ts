import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BloqueioPedido extends ModelBase {
  static tableName = "BloqueioPedido";
  static idColumn = [];

  NumPedido!: number;
  Estacao!: string;
  CdFilial!: number;
  

  static getFields() {
    return [
      "NumPedido",
      "Estacao",
      "CdFilial",
      ];
  }
}

BloqueioPedido.knex(connections.plano);

export type TBloqueioPedido = ModelObject<BloqueioPedido>;
