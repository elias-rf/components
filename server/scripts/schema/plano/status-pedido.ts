import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class StatusPedido extends ModelBase {
  static tableName = "StatusPedido";
  static idColumn = ["CdStatus"];

  CdStatus!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdStatus",
      "Descricao",
      ];
  }
}

StatusPedido.knex(connections.plano);

export type TStatusPedido = ModelObject<StatusPedido>;
