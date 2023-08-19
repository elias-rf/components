import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoFuncaoItem extends ModelBase {
  static tableName = "ConfiguracaoFuncaoItem";
  static idColumn = [];

  CdFuncao!: string;
  Parametro!: string;
  Conteudo!: string;
  

  static getFields() {
    return [
      "CdFuncao",
      "Parametro",
      "Conteudo",
      ];
  }
}

ConfiguracaoFuncaoItem.knex(connections.plano);

export type TConfiguracaoFuncaoItem = ModelObject<ConfiguracaoFuncaoItem>;
