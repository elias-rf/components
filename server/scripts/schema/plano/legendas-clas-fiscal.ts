import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LegendasClasFiscal extends ModelBase {
  static tableName = "LegendasClasFiscal";
  static idColumn = ["ClasFiscal"];

  ClasFiscal!: string;
  Legenda!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "ClasFiscal",
      "Legenda",
      "DtUltAlteracao",
      ];
  }
}

LegendasClasFiscal.knex(connections.plano);

export type TLegendasClasFiscal = ModelObject<LegendasClasFiscal>;
