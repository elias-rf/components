import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipConveniado extends ModelBase {
  static tableName = "TipConveniado";
  static idColumn = ["CdTipConveniado"];

  CdTipConveniado!: number;
  DsTipConveniado!: string;
  

  static getFields() {
    return [
      "CdTipConveniado",
      "DsTipConveniado",
      ];
  }
}

TipConveniado.knex(connections.plano);

export type TTipConveniado = ModelObject<TipConveniado>;
