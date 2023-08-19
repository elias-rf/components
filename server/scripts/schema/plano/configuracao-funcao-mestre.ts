import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoFuncaoMestre extends ModelBase {
  static tableName = "ConfiguracaoFuncaoMestre";
  static idColumn = ["CdFuncao"];

  CdFuncao!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdFuncao",
      "Descricao",
      ];
  }
}

ConfiguracaoFuncaoMestre.knex(connections.plano);

export type TConfiguracaoFuncaoMestre = ModelObject<ConfiguracaoFuncaoMestre>;
