import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Pagar extends ModelBase {
  static tableName = "ArqDup";
  static idColumn = ["CdEmpresa", "NumDoc"];

  CdEmpresa!: number;
  NumDoc!: number;
  CodFor!: number;
  SeqDoc!: number;
  Serie!: string;
  DatEmi!: Date;
  DatVen!: Date;
  DatPag!: Date;
  TipInd!: string;
  Aceite!: string;
  NumFat!: number;
  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  NumCheque!: number;
  FgSituacao!: string;
  DtUltAlteracao!: Date;
  TpMovimentoBanco!: string;
  NumLancamento!: number;
  NumNota!: number;
  CdTipoPagamento!: number;
  CdFontePagamento!: number;
  DtLancamento!: Date;
  Modelo!: string;
  NumAuxiliar!: string;
  VlAmortizado!: number;
  PercJuroDiario!: number;
  VlMultaAtraso!: number;
  VlDocumento!: number;
  VlDeducao!: number;
  VlAcrescimo!: number;
  VlJurosPago!: number;
  ObsDocumento!: string;
  FgTipoCustoDRE!: string;

  static getFields() {
    return [
      "CdEmpresa",
      "NumDoc",
      "CodFor",
      "SeqDoc",
      "Serie",
      "DatEmi",
      "DatVen",
      "DatPag",
      "TipInd",
      "Aceite",
      "NumFat",
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "NumCheque",
      "FgSituacao",
      "DtUltAlteracao",
      "TpMovimentoBanco",
      "NumLancamento",
      "NumNota",
      "CdTipoPagamento",
      "CdFontePagamento",
      "DtLancamento",
      "Modelo",
      "NumAuxiliar",
      "VlAmortizado",
      "PercJuroDiario",
      "VlMultaAtraso",
      "VlDocumento",
      "VlDeducao",
      "VlAcrescimo",
      "VlJurosPago",
      "ObsDocumento",
      "FgTipoCustoDRE",
    ];
  }
}

Pagar.knex(connections.plano);

export type TPagar = ModelObject<Pagar>;
