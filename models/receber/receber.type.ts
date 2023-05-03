import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TReceberPk {
  filial_id?: number;
  doc_id?: number;
  serie?: string;
  modelo?: string;
  item_doc?: number;
}
export interface TReceber extends TReceberPk {
  sigla_doc?: string;
  agencia_id?: number;
  agencia_cliente_id?: number;
  banco_id?: number;
  cliente_banco_id?: number;
  cliente_id?: number;
  funcionario_id?: number;
  data_emissao?: string;
  data_limite_desconto?: string;
  data_liquidacao_cancelamento?: string;
  data_remessa_cobranca?: string;
  data_vencimento?: string;
  data_ultima_alteracao?: string;
  FgBloqueto?: string;
  FgCobranca?: string;
  FgDuplicata?: string;
  FgFatura?: string;
  FgSituacao?: string;
  Motivo?: string;
  NmCartao?: string;
  NossoNr?: string;
  NossoNumero?: number;
  NumCheque?: number;
  NumConta?: string;
  SgFormaCob?: string;
  VlAmortizado?: number;
  VlDescNegociado?: number;
  VlDesconto?: number;
  VlEstorno?: number;
  VlJuroDiaAtr?: number;
  VlTitulo?: number;
  FgTipoCarteira?: string;
  FgAceite?: string;
  PracaCompensacao?: number;
  NumPDV?: number;
  PrazoCompensacao?: number;
  DtCancelamento?: string;
  CdVendedor?: number;
  CdDepositario?: number;
  NumMapaEntrega?: number;
  DtAcertoMapaEntrega?: string;
  CdCarteira?: number;
  CdComprador?: number;
  FgReceita?: string;
  NumPedido?: number;
  SeqCaixa?: number;
  TarjaCheque?: string;
  NumAutCartao?: number;
  CdVendedorExtra?: number;
  NumeroFatura?: number;
  TipoDocFatura?: string;
  PercMultaAtraso?: number;
  Usuario?: string;
  TipoOperacaoCartao?: string;
  OrigemLancamento?: string;
  VlJuros?: number;
  FgCompensar?: string;
  DtUltimoEnvioEmailCR?: string;
  FgEmailAVencer?: string;
}

export type TReceberFields = keyof Required<TReceber>;

export type TReceberIds = {
  [pk in keyof Required<TReceberPk>]: any;
};
export type TReceberSelect = TSelect<TReceberFields>;
export type TReceberWhere = TWhere<TReceberFields>;
export type TReceberOrder = TOrder<TReceberFields>;

export type TReceberSchema = () => Promise<TFieldDef[]>;
export type TReceberClear = () => Promise<TReceber>;
export type TReceberList = (args: {
  where?: TWhere<TReceberFields>[];
  order?: TOrder<TReceberFields>[];
  limit?: number;
  select?: TSelect<TReceberFields>;
}) => Promise<TReceber[]>;
export type TReceberRead = (args: {
  id: TReceberIds;
  select?: TSelect<TReceberFields>;
}) => Promise<TReceber>;

export type TReceberCreate = (args: {
  data: TReceber;
  select?: TSelect<TReceberFields>;
}) => Promise<TReceber>;
export type TReceberUpdate = (args: {
  id: TReceberIds;
  data: TReceber;
  select?: TSelect<TReceberFields>;
}) => Promise<TReceber>;
export type TReceberDel = (args: { id: TReceberIds }) => Promise<number>;

//#region def
//#endregion

export type TReceberCrud = {
  query: {
    schema: TReceberSchema;
    clear: TReceberClear;
    list: TReceberList;
    read: TReceberRead;
  };
  mutation: {
    create: TReceberCreate;
    update: TReceberUpdate;
    del: TReceberDel;
  };
};

export type TReceberModel = TReceberCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TReceberRpc = TReceberModel;
