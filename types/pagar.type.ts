import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TPagarPk = {
  filial_id?: number;
  doc_id?: number;
};
export type TPagarCol = {
  fornecedor_id?: number;
  item_doc?: number;
  serie?: string;
  data_emissao?: string;
  data_venda?: string;
  data_pagamento?: string;
  TipInd?: string;
  aceite?: string;
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
export type TPagar = TPagarPk | TPagarCol;

export type TPagarFields = keyof Required<TPagarPk> | keyof Required<TPagarCol>;

export type TPagarIds = {
  [pk in keyof Required<TPagarPk>]: any;
};
export type TPagarSelect = TSelect<TPagarFields>;
export type TPagarWhere = TWhere<TPagarFields>;
export type TPagarOrder = TOrder<TPagarFields>;

export type TPagarSchema = () => Promise<TFieldClient[]>;
export type TPagarClear = () => Promise<TPagar>;
export type TPagarList = (args: {
  where?: TWhere<TPagarFields>[];
  order?: TOrder<TPagarFields>[];
  limit?: number;
  select?: TSelect<TPagarFields>;
}) => Promise<TPagar[]>;
export type TPagarRead = (args: {
  id: TPagarIds;
  select?: TSelect<TPagarFields>;
}) => Promise<TPagar>;

export type TPagarCreate = (args: { data: TPagar }) => Promise<TPagar>;
export type TPagarUpdate = (args: {
  id: TPagarIds;
  data: TPagar;
}) => Promise<TPagar>;
export type TPagarDel = (args: { id: TPagarIds }) => Promise<number>;

export type TPagarRpc = {
  query: {
    pagarSchema: TPagarSchema;
    clear: TPagarClear;
    list: TPagarList;
    read: TPagarRead;
  };
  mutation: {
    pagarCreate: TPagarCreate;
    update: TPagarUpdate;
    del: TPagarDel;
  };
};
