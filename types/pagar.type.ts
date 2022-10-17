export type TPagarId = {
  CdEmpresa?: number;
  NumDoc?: number;
  CodFor?: number;
};

export type TPagarBase = {
  SeqDoc?: number;
  Serie?: string;
  DatEmi?: string;
  DatVen?: string;
  DatPag?: string;
  TipInd?: string;
  Aceite?: string;
  NumFat?: number;
  CdBanco?: number;
  CdAgencia?: number;
  NumConta?: string;
  NumCheque?: number;
  FgSituacao?: string;
  DtUltAlteracao?: string;
  TpMovimentoBanco?: string;
  NumLancamento?: number;
  NumNota?: number;
  CdTipoPagamento?: number;
  CdFontePagamento?: number;
  DtLancamento?: string;
  Modelo?: string;
  NumAuxiliar?: string;
  VlAmortizado?: number;
  PercJuroDiario?: number;
  VlMultaAtraso?: number;
  VlDocumento?: number;
  VlDeducao?: number;
  VlAcrescimo?: number;
  VlJurosPago?: number;
  ObsDocumento?: string;
  FgTipoCustoDRE?: string;
};

export type TPagar = Partial<TPagarId | TPagarBase>;
