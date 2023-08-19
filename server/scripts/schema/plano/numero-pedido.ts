import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NumeroPedido extends ModelBase {
  static tableName = "NumeroPedido";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  NumUltPedido!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumUltPedido",
      ];
  }
}

NumeroPedido.knex(connections.plano);

export type TNumeroPedido = ModelObject<NumeroPedido>;
