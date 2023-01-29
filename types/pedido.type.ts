import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TPedidoPk = {
  CdEmitente?: number;
  CdFilial?: number;
  NumPedido?: number;
};
export type TPedidoCol = {
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
};
export type TPedido = TPedidoPk | TPedidoCol;

export type TPedidoFields =
  | keyof Required<TPedidoPk>
  | keyof Required<TPedidoCol>;

export type TPedidoIds = {
  [pk in keyof Required<TPedidoPk>]: any;
};
export type TPedidoSelect = TSelect<TPedidoFields>;
export type TPedidoWhere = TWhere<TPedidoFields>;
export type TPedidoOrder = TOrder<TPedidoFields>;

export type TPedidoSchema = () => Promise<TFieldClient[]>;
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

export type TPedidoCreate = (args: { data: TPedido }) => Promise<TPedido>;
export type TPedidoUpdate = (args: {
  id: TPedidoIds;
  data: TPedido;
}) => Promise<TPedido>;
export type TPedidoDel = (args: { id: TPedidoIds }) => Promise<number>;

export type TPedidoRpc = {
  query: {
    pedidoSchema: TPedidoSchema;
    clear: TPedidoClear;
    list: TPedidoList;
    read: TPedidoRead;
  };
  mutation: {
    pedidoCreate: TPedidoCreate;
    update: TPedidoUpdate;
    del: TPedidoDel;
  };
};
