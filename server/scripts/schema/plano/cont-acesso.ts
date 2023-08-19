import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContAcesso extends ModelBase {
  static tableName = "ContAcesso";
  static idColumn = [];

  Base!: string;
  Estacao!: string;
  

  static getFields() {
    return [
      "Base",
      "Estacao",
      ];
  }
}

ContAcesso.knex(connections.plano);

export type TContAcesso = ModelObject<ContAcesso>;
