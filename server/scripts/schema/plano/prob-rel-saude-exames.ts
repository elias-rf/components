import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProbRelSaudeExames extends ModelBase {
  static tableName = "ProbRelSaudeExames";
  static idColumn = [];

  CdPrs!: string;
  Data!: Date;
  CdCliente!: string;
  

  static getFields() {
    return [
      "CdPrs",
      "Data",
      "CdCliente",
      ];
  }
}

ProbRelSaudeExames.knex(connections.plano);

export type TProbRelSaudeExames = ModelObject<ProbRelSaudeExames>;
