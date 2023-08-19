import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VidalinkLstConvida extends ModelBase {
  static tableName = "VidalinkLstConvida";
  static idColumn = [];

  Id!: number;
  Data!: Date;
  Texto!: string;
  

  static getFields() {
    return [
      "Id",
      "Data",
      "Texto",
      ];
  }
}

VidalinkLstConvida.knex(connections.plano);

export type TVidalinkLstConvida = ModelObject<VidalinkLstConvida>;
