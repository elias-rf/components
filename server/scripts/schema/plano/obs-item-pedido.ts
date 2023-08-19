import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsItemPedido extends ModelBase {
  static tableName = "ObsItemPedido";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Sequencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Sequencia",
      "Observacao",
      ];
  }
}

ObsItemPedido.knex(connections.plano);

export type TObsItemPedido = ModelObject<ObsItemPedido>;
