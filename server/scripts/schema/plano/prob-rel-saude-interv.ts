import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProbRelSaudeInterv extends ModelBase {
  static tableName = "ProbRelSaudeInterv";
  static idColumn = [];

  CdIntervencao!: number;
  CdCliente!: number;
  CdPrs!: string;
  Data!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdIntervencao",
      "CdCliente",
      "CdPrs",
      "Data",
      "DtUltAlteracao",
      ];
  }
}

ProbRelSaudeInterv.knex(connections.plano);

export type TProbRelSaudeInterv = ModelObject<ProbRelSaudeInterv>;
