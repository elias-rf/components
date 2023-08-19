import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOcorrenciaOrigem extends ModelBase {
  static tableName = "tOcorrenciaOrigem";
  static idColumn = ["kOrigem"];

  kOrigem!: string;
  

  static getFields() {
    return [
      "kOrigem",
      ];
  }
}

TOcorrenciaOrigem.knex(connections.oftalmo);

export type TTOcorrenciaOrigem = ModelObject<TOcorrenciaOrigem>;
