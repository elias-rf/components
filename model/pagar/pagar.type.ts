import { TField, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TPagarPk {
  filial_id?: number;
  doc_id?: number;
}
export interface TPagar extends TPagarPk {
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
}

export type TPagarFields = keyof Required<TPagar>;

export type TPagarIds = {
  [pk in keyof Required<TPagarPk>]: any;
};
export type TPagarSelect = TSelect<TPagarFields>;
export type TPagarWhere = TWhere<TPagarFields>;
export type TPagarOrder = TOrder<TPagarFields>;

export type TPagarSchema = () => Promise<TField[]>;
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

export type TPagarCreate = (args: {
  data: TPagar;
  select?: TSelect<TPagarFields>;
}) => Promise<TPagar>;
export type TPagarUpdate = (args: {
  id: TPagarIds;
  data: TPagar;
  select?: TSelect<TPagarFields>;
}) => Promise<TPagar>;
export type TPagarDel = (args: { id: TPagarIds }) => Promise<number>;

//#region def
//#endregion

export type TPagarCrud = {
  query: {
    schema: TPagarSchema;
    clear: TPagarClear;
    list: TPagarList;
    read: TPagarRead;
  };
  mutation: {
    create: TPagarCreate;
    update: TPagarUpdate;
    del: TPagarDel;
  };
};

export type TPagarModel = TPagarCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TPagarRpc = TPagarModel;
