import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNcmDesativado extends ModelBase {
  static tableName = "ConfiguracaoNCMDesativado";
  static idColumn = ["NMC"];

  NMC!: string;
  

  static getFields() {
    return [
      "NMC",
      ];
  }
}

ConfiguracaoNcmDesativado.knex(connections.plano);

export type TConfiguracaoNcmDesativado = ModelObject<ConfiguracaoNcmDesativado>;
