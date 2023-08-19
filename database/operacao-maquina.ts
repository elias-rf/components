import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class OperacaoMaquina extends ModelBase {
  static tableName = "tOperacaoMaquina";
  static idColumn = ["fkOperacao", "fkMaquina"];

  fkOperacao!: number;
  fkMaquina!: string;

  static getFields() {
    return ["fkOperacao", "fkMaquina"];
  }
}

OperacaoMaquina.knex(connections.oftalmo);

export type TOperacaoMaquina = ModelObject<OperacaoMaquina>;
