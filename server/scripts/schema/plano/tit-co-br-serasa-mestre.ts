import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TitCoBrSerasaMestre extends ModelBase {
  static tableName = "TitCoBrSerasaMestre";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  DtUltEnvio!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "DtUltEnvio",
      ];
  }
}

TitCoBrSerasaMestre.knex(connections.plano);

export type TTitCoBrSerasaMestre = ModelObject<TitCoBrSerasaMestre>;
