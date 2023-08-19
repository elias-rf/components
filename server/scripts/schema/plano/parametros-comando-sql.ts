import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosComandoSql extends ModelBase {
  static tableName = "ParametrosComandoSQL";
  static idColumn = ["IdComando"];

  IdComando!: string;
  Comando!: string;
  

  static getFields() {
    return [
      "IdComando",
      "Comando",
      ];
  }
}

ParametrosComandoSql.knex(connections.plano);

export type TParametrosComandoSql = ModelObject<ParametrosComandoSql>;
