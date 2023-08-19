import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SegmentosCliente extends ModelBase {
  static tableName = "SegmentosCliente";
  static idColumn = [];

  CdCliente!: number;
  CdSegmento!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "CdSegmento",
      ];
  }
}

SegmentosCliente.knex(connections.plano);

export type TSegmentosCliente = ModelObject<SegmentosCliente>;
