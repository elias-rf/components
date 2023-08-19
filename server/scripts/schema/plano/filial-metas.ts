import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialMetas extends ModelBase {
  static tableName = "FilialMetas";
  static idColumn = [];

  CdFilial!: number;
  Data!: Date;
  VlMeta!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "Data",
      "VlMeta",
      ];
  }
}

FilialMetas.knex(connections.plano);

export type TFilialMetas = ModelObject<FilialMetas>;
