import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosFiscaisNop extends ModelBase {
  static tableName = "ParametrosFiscaisNop";
  static idColumn = [];

  IdParametro!: number;
  Nop!: number;
  

  static getFields() {
    return [
      "IdParametro",
      "Nop",
      ];
  }
}

ParametrosFiscaisNop.knex(connections.plano);

export type TParametrosFiscaisNop = ModelObject<ParametrosFiscaisNop>;
