import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoMapa extends ModelBase {
  static tableName = "ConfiguracaoMapa";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  DtUltimoMapa!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "DtUltimoMapa",
      ];
  }
}

ConfiguracaoMapa.knex(connections.plano);

export type TConfiguracaoMapa = ModelObject<ConfiguracaoMapa>;
