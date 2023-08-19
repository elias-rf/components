import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EPharmaStatus extends ModelBase {
  static tableName = "ePharmaStatus";
  static idColumn = ["Identificacao"];

  Identificacao!: number;
  DtUltEncerramento!: Date;
  DtInicializacao!: Date;
  

  static getFields() {
    return [
      "Identificacao",
      "DtUltEncerramento",
      "DtInicializacao",
      ];
  }
}

EPharmaStatus.knex(connections.plano);

export type TEPharmaStatus = ModelObject<EPharmaStatus>;
