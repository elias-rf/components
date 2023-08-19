import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedFiscalRegE116Processo extends ModelBase {
  static tableName = "SpedFiscalRegE116Processo";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  DtBase!: Date;
  CdObrigacaoRecolher!: number;
  CdReceita!: string;
  CdIndicadorOrigem!: number;
  NumProcesso!: string;
  DescricaoProcesso!: string;
  DescricaoComplementarProcesso!: string;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "DtBase",
      "CdObrigacaoRecolher",
      "CdReceita",
      "CdIndicadorOrigem",
      "NumProcesso",
      "DescricaoProcesso",
      "DescricaoComplementarProcesso",
      "DtUltAtualizacao",
      ];
  }
}

SpedFiscalRegE116Processo.knex(connections.plano);

export type TSpedFiscalRegE116Processo = ModelObject<SpedFiscalRegE116Processo>;
