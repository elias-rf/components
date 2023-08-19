import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNFeLogoMarca extends ModelBase {
  static tableName = "ConfiguracaoNFeLogoMarca";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Imagem!: any;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Imagem",
      ];
  }
}

ConfiguracaoNFeLogoMarca.knex(connections.plano);

export type TConfiguracaoNFeLogoMarca = ModelObject<ConfiguracaoNFeLogoMarca>;
