import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosContAcesso extends ModelBase {
  static tableName = "ParametrosContAcesso";
  static idColumn = [];

  DtUltAlteracao!: Date;
  Base!: string;
  Estacao!: string;
  

  static getFields() {
    return [
      "DtUltAlteracao",
      "Base",
      "Estacao",
      ];
  }
}

ParametrosContAcesso.knex(connections.plano);

export type TParametrosContAcesso = ModelObject<ParametrosContAcesso>;
