import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoObsamiVida extends ModelBase {
  static tableName = "PedidoOBSAMIVida";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Observacao",
      ];
  }
}

PedidoObsamiVida.knex(connections.plano);

export type TPedidoObsamiVida = ModelObject<PedidoObsamiVida>;
