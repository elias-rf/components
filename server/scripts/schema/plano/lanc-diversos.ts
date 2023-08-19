import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LancDiversos extends ModelBase {
  static tableName = "LancDiversos";
  static idColumn = [];

  DtUltAlteracao!: Date;
  TxFinalidade!: string;
  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  DtBase!: Date;
  NumLcto!: number;
  CdTpAplicacao!: number;
  VlValor!: number;
  TxTipLcto!: string;
  CdFilialAssociada!: number;
  FgSituacao!: string;
  CdContabil!: number;
  CdBancoDestino!: number;
  NumContaDestino!: string;
  NumLctoDestino!: number;
  CdAgenciaDestino!: number;
  

  static getFields() {
    return [
      "DtUltAlteracao",
      "TxFinalidade",
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtBase",
      "NumLcto",
      "CdTpAplicacao",
      "VlValor",
      "TxTipLcto",
      "CdFilialAssociada",
      "FgSituacao",
      "CdContabil",
      "CdBancoDestino",
      "NumContaDestino",
      "NumLctoDestino",
      "CdAgenciaDestino",
      ];
  }
}

LancDiversos.knex(connections.plano);

export type TLancDiversos = ModelObject<LancDiversos>;
