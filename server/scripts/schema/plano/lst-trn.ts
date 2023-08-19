import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LstTrn extends ModelBase {
  static tableName = "LstTrn";
  static idColumn = [];

  Data!: Date;
  Usuario!: string;
  Texto!: string;
  

  static getFields() {
    return [
      "Data",
      "Usuario",
      "Texto",
      ];
  }
}

LstTrn.knex(connections.plano);

export type TLstTrn = ModelObject<LstTrn>;
