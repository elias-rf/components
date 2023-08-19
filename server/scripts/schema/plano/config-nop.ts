import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigNop extends ModelBase {
  static tableName = "ConfigNop";
  static idColumn = [];

  CdFilial!: number;
  UF!: string;
  TipoOperacao!: string;
  TipoNota!: string;
  TipoCliente!: string;
  OrigemMercadoria!: number;
  TipoTributacaoICMS!: number;
  TipoTributacaoIPI!: number;
  TipoTributacaoPIS!: number;
  TipoTributacaoCOFINS!: number;
  Nop!: number;
  DtUltAlteracao!: Date;
  FinalidadeNota!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "UF",
      "TipoOperacao",
      "TipoNota",
      "TipoCliente",
      "OrigemMercadoria",
      "TipoTributacaoICMS",
      "TipoTributacaoIPI",
      "TipoTributacaoPIS",
      "TipoTributacaoCOFINS",
      "Nop",
      "DtUltAlteracao",
      "FinalidadeNota",
      ];
  }
}

ConfigNop.knex(connections.plano);

export type TConfigNop = ModelObject<ConfigNop>;
