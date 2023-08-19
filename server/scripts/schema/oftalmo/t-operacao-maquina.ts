import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOperacaoMaquina extends ModelBase {
  static tableName = "tOperacaoMaquina";
  static idColumn = [];

  fkOperacao!: number;
  fkMaquina!: string;
  

  static getFields() {
    return [
      "fkOperacao",
      "fkMaquina",
      ];
  }
}

TOperacaoMaquina.knex(connections.oftalmo);

export type TTOperacaoMaquina = ModelObject<TOperacaoMaquina>;
