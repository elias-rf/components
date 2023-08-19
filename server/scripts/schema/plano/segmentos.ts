import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Segmentos extends ModelBase {
  static tableName = "Segmentos";
  static idColumn = ["CdSegmento"];

  CdSegmento!: number;
  NmSegmento!: string;
  

  static getFields() {
    return [
      "CdSegmento",
      "NmSegmento",
      ];
  }
}

Segmentos.knex(connections.plano);

export type TSegmentos = ModelObject<Segmentos>;
