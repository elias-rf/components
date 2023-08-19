import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestrePedidoObs extends ModelBase {
  static tableName = "MestrePedidoObs";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Observacao",
      ];
  }
}

MestrePedidoObs.knex(connections.plano);

export type TMestrePedidoObs = ModelObject<MestrePedidoObs>;
