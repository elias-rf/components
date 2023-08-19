import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoSitef extends ModelBase {
  static tableName = "ConfiguracaoSITEF";
  static idColumn = ["CdFilial"];

  FgAtivo!: string;
  Host1!: number;
  Host2!: number;
  Host3!: number;
  Host4!: number;
  Loja!: string;
  MsgPINPAD!: string;
  CaminhoSITEF!: string;
  ContraSenha!: string;
  CdFilial!: number;
  

  static getFields() {
    return [
      "FgAtivo",
      "Host1",
      "Host2",
      "Host3",
      "Host4",
      "Loja",
      "MsgPINPAD",
      "CaminhoSITEF",
      "ContraSenha",
      "CdFilial",
      ];
  }
}

ConfiguracaoSitef.knex(connections.plano);

export type TConfiguracaoSitef = ModelObject<ConfiguracaoSitef>;
