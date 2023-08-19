import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class OcorrenciaTipo extends ModelBase {
  static tableName = "tOcorrenciaTipo";
  static idColumn = ["kTipo"];

  kTipo!: string;

  static getFields() {
    return ["kTipo"];
  }
}

OcorrenciaTipo.knex(connections.oftalmo);

export type TOcorrenciaTipo = ModelObject<OcorrenciaTipo>;
