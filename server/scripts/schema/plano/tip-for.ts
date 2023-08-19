import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipFor extends ModelBase {
  static tableName = "TipFor";
  static idColumn = ["CdTipo"];

  CdTipo!: number;
  NmTipo!: string;
  

  static getFields() {
    return [
      "CdTipo",
      "NmTipo",
      ];
  }
}

TipFor.knex(connections.plano);

export type TTipFor = ModelObject<TipFor>;
