import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LancCaixa extends ModelBase {
  static tableName = "LancCaixa";
  static idColumn = [];

  CdEmpresa!: number;
  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  DtBase!: Date;
  NumLcto!: number;
  CdTpAplicacao!: number;
  VlValor!: number;
  TxFinalidade!: string;
  TxTipLcto!: string;
  CdFilial!: number;
  NumDoc!: number;
  CodFor!: number;
  SeqDoc!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtBase",
      "NumLcto",
      "CdTpAplicacao",
      "VlValor",
      "TxFinalidade",
      "TxTipLcto",
      "CdFilial",
      "NumDoc",
      "CodFor",
      "SeqDoc",
      ];
  }
}

LancCaixa.knex(connections.plano);

export type TLancCaixa = ModelObject<LancCaixa>;
