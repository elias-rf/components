import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class OcorrenciaOrigem extends ModelBase {
  static tableName = "tOcorrenciaOrigem";
  static idColumn = ["kOrigem"];

  kOrigem!: string;

  static getFields() {
    return ["kOrigem"];
  }
}

OcorrenciaOrigem.knex(connections.oftalmo);

export type TOcorrenciaOrigem = ModelObject<OcorrenciaOrigem>;
