import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoEmailCr extends ModelBase {
  static tableName = "ConfiguracaoEmailCR";
  static idColumn = ["CdEmpresa"];

  CdEmpresa!: number;
  FgEnvioAutomaticoEmailCR!: string;
  DiasCarenciaEnvioEmailCR!: number;
  PrazoReEnvioEmailCR!: number;
  DtUltimoEnvioEmail!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "FgEnvioAutomaticoEmailCR",
      "DiasCarenciaEnvioEmailCR",
      "PrazoReEnvioEmailCR",
      "DtUltimoEnvioEmail",
      ];
  }
}

ConfiguracaoEmailCr.knex(connections.plano);

export type TConfiguracaoEmailCr = ModelObject<ConfiguracaoEmailCr>;
