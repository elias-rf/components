import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOcorrenciaTipo extends ModelBase {
  static tableName = "tOcorrenciaTipo";
  static idColumn = ["kTipo"];

  kTipo!: string;
  

  static getFields() {
    return [
      "kTipo",
      ];
  }
}

TOcorrenciaTipo.knex(connections.oftalmo);

export type TTOcorrenciaTipo = ModelObject<TOcorrenciaTipo>;
