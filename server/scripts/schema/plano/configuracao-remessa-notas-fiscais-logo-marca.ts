import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoRemessaNotasFiscaisLogoMarca extends ModelBase {
  static tableName = "ConfiguracaoRemessaNotasFiscaisLogoMarca";
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

ConfiguracaoRemessaNotasFiscaisLogoMarca.knex(connections.plano);

export type TConfiguracaoRemessaNotasFiscaisLogoMarca = ModelObject<ConfiguracaoRemessaNotasFiscaisLogoMarca>;
