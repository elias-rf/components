import { TField, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TPedidoPk {
  CdEmitente?: number;
  CdFilial?: number;
  NumPedido?: number;
}
export interface TPedido extends TPedidoPk {
  CdTipoVenda?: number;
  CdTransportadora?: number;
  CdVendedor?: number;
  ComboFilial?: number;
  CondFaturamento?: string;
  CondPgto?: string;
  DtColocacao?: string;
  DtEmissao?: string;
  DtEntrega?: string;
  FgSituacao?: string;
  FgSomaIPI?: string;
  FgVendaFilial?: string;
  Garantia?: string;
  Horario?: string;
  NmConfirmacao?: string;
  NmFavorecido?: string;
  Nop?: number;
  NumPedidoEmitente?: string;
  NumRecibo?: number;
  Obs?: string;
  Op_Transferencia?: string;
  PercAcrescimo?: number;
  PercComissaoPrazo?: number;
  PercComissaoVista?: number;
  PercDesconto?: number;
  Tipo?: string;
  TipoFrete?: string;
  Validade?: string;
  VlAcrescimo?: number;
  VlDesconto?: number;
  VlPago?: number;
  VlTotal?: number;
  CdSetor?: number;
  FgPreVenda?: string;
  HrEntrega?: string;
  ModeloPedido?: string;
  CdStatus?: number;
  VlFrete?: number;
  DtUltAlteracao?: string;
  CdCondPagtoChe?: number;
  CdTipoEntrega?: number;
  CdCondPagto?: number;
  HrEntregaIni?: string;
  HrEntregaFim?: string;
  VlTaxaEntrega?: number;
  CdVendedorExtra?: number;
  PercComissaoVistaExtra?: number;
  PercComissaoPrazoExtra?: number;
  CdMatriculaVMS?: string;
  NSU?: string;
  VlCreditoVMS?: number;
  OperadoraVMS?: string;
  FgEnvioCaneta?: string;
  NmPaciente?: string;
  CdProjeto?: number;
  CdLocalEstoque?: number;
  FgStatusOrdem?: string;
  FgConferencia?: string;
  Contato?: string;
  Departamento?: string;
  AssisTecnica?: string;
  PrazoEntrega?: string;
  FgRateio?: string;
  CondPagamentoIni?: number;
  FgEndComercial?: string;
  CdClienteImpressao?: number;
  NumPedidoOriginal?: number;
  FgBuscaReceita?: string;
  FgVendaConsultorio?: string;
  DestinoMaterial?: string;
  VlIPIFrete?: number;
  FgObrigaNotaFiscal?: string;
  NumECFCupomVinculado?: number;
  NumCOOCupomVinculado?: number;
  NumCOODAV?: number;
  NumSerieECF?: string;
  CNPJCPFAdquirente?: number;
  ControleNum?: number;
  LocalEntregaAnterior?: string;
  ProximidadesAnterior?: string;
  Usuario?: string;
  NumPlaca?: string;
  FgEntregaFutura?: string;
  VlSeguro?: number;
  VlDespesasAcessorias?: number;
  FgImprimePedidoSemVlUnitario?: string;
  VlTotalPesoBruto?: number;
  VlDescontoCombo?: number;
}

export type TPedidoFields = keyof Required<TPedido>;

export type TPedidoIds = {
  [pk in keyof Required<TPedidoPk>]: any;
};
export type TPedidoSelect = TSelect<TPedidoFields>;
export type TPedidoWhere = TWhere<TPedidoFields>;
export type TPedidoOrder = TOrder<TPedidoFields>;

export type TPedidoSchema = () => Promise<TField[]>;
export type TPedidoClear = () => Promise<TPedido>;
export type TPedidoList = (args: {
  where?: TWhere<TPedidoFields>[];
  order?: TOrder<TPedidoFields>[];
  limit?: number;
  select?: TSelect<TPedidoFields>;
}) => Promise<TPedido[]>;
export type TPedidoRead = (args: {
  id: TPedidoIds;
  select?: TSelect<TPedidoFields>;
}) => Promise<TPedido>;

export type TPedidoCreate = (args: {
  data: TPedido;
  select?: TSelect<TPedidoFields>;
}) => Promise<TPedido>;
export type TPedidoUpdate = (args: {
  id: TPedidoIds;
  data: TPedido;
  select?: TSelect<TPedidoFields>;
}) => Promise<TPedido>;
export type TPedidoDel = (args: { id: TPedidoIds }) => Promise<number>;

//#region def
//#endregion

export type TPedidoCrud = {
  query: {
    schema: TPedidoSchema;
    clear: TPedidoClear;
    list: TPedidoList;
    read: TPedidoRead;
  };
  mutation: {
    create: TPedidoCreate;
    update: TPedidoUpdate;
    del: TPedidoDel;
  };
};

export type TPedidoModel = TPedidoCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TPedidoRpc = TPedidoModel;
