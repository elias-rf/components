import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNfCeLogoMarca extends ModelBase {
  static tableName = "ConfiguracaoNFCeLogoMarca";
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

ConfiguracaoNfCeLogoMarca.knex(connections.plano);

export type TConfiguracaoNfCeLogoMarca = ModelObject<ConfiguracaoNfCeLogoMarca>;
