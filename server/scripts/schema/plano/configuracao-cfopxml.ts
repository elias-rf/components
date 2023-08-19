import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoCfopxml extends ModelBase {
  static tableName = "ConfiguracaoCFOPXML";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdFornecedor!: number;
  CFOPOrigem!: number;
  CFOPDestino!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdFornecedor",
      "CFOPOrigem",
      "CFOPDestino",
      ];
  }
}

ConfiguracaoCfopxml.knex(connections.plano);

export type TConfiguracaoCfopxml = ModelObject<ConfiguracaoCfopxml>;
