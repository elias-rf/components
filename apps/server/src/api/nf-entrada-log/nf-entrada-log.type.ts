export type TNfEntradaLogId = {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
};

export type TNfEntradaLogBase = {
  CdFornecedor?: number;
  Data?: string;
  Usuario?: string;
  Operacao?: string;
  Modelo?: string;
};

export type TNfEntradaLog = Partial<TNfEntradaLogId | TNfEntradaLogBase>;
