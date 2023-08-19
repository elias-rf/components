import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoSiTefFilial extends ModelBase {
  static tableName = "ConfiguracaoSiTefFilial";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  IPSiTef!: string;
  IdLoja!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "IPSiTef",
      "IdLoja",
      ];
  }
}

ConfiguracaoSiTefFilial.knex(connections.plano);

export type TConfiguracaoSiTefFilial = ModelObject<ConfiguracaoSiTefFilial>;
