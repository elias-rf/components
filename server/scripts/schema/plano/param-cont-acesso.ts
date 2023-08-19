import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParamContAcesso extends ModelBase {
  static tableName = "ParamContAcesso";
  static idColumn = [];

  Base!: string;
  Estacao!: string;
  DtUltAlteracao!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "Base",
      "Estacao",
      "DtUltAlteracao",
      "Observacao",
      ];
  }
}

ParamContAcesso.knex(connections.plano);

export type TParamContAcesso = ModelObject<ParamContAcesso>;
