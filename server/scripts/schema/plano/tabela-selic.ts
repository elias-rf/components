import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabelaSelic extends ModelBase {
  static tableName = "TabelaSelic";
  static idColumn = ["DtBase"];

  DtBase!: Date;
  PercSelic!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "DtBase",
      "PercSelic",
      "DtUltAlteracao",
      ];
  }
}

TabelaSelic.knex(connections.plano);

export type TTabelaSelic = ModelObject<TabelaSelic>;
