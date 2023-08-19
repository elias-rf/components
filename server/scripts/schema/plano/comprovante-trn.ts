import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ComprovanteTrn extends ModelBase {
  static tableName = "ComprovanteTRN";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  NumLinha!: number;
  Texto!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "NumLinha",
      "Texto",
      ];
  }
}

ComprovanteTrn.knex(connections.plano);

export type TComprovanteTrn = ModelObject<ComprovanteTrn>;
