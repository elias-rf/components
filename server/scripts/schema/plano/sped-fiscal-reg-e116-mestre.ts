import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedFiscalRegE116Mestre extends ModelBase {
  static tableName = "SpedFiscalRegE116Mestre";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  DtBase!: Date;
  CdObrigacaoRecolher!: number;
  CdReceita!: string;
  VlObrigacaoRecolher!: number;
  DtVencimento!: Date;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "DtBase",
      "CdObrigacaoRecolher",
      "CdReceita",
      "VlObrigacaoRecolher",
      "DtVencimento",
      "DtUltAtualizacao",
      ];
  }
}

SpedFiscalRegE116Mestre.knex(connections.plano);

export type TSpedFiscalRegE116Mestre = ModelObject<SpedFiscalRegE116Mestre>;
