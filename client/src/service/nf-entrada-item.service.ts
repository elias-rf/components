import { rpcFactory } from "../lib/http/rpc.factory";

type NfEntradaItemRecord = {
  CdEmpresa?: number;
  NroNF?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: number;
  CdProduto?: string;
  FgCusto?: string;
  FgEtiqueta?: string;
  PercIcms?: number;
  PercIpi?: number;
  Quantidade?: number;
  TipoMovimentacao?: string;
  VlAcrescItem?: number;
  VlDescItem?: number;
  VlrIcms?: number;
  VlrIpi?: number;
  VlTotItem?: number;
  TipoTributacao?: string;
  VlBaseSub?: number;
  VlIcmsSub?: number;
  DtEntr?: string;
  FgEstoque?: string;
  VlRepasseICMSItem?: number;
  FgICMSJaRecolhido?: number;
  PrecPMC?: number;
  VlRelacionado?: number;
  FgCompoeBaseSub?: string;
  Nop?: number;
  NopFiscalItem?: number;
  VlBaseCalculoICMS?: number;
  VlBrutoUnitario?: number;
  VlLiquidoUnitario?: number;
  CdBaseCalculoCreditoPISCOFINS?: number;
  CdTipoCreditoPISCOFINS?: number;
  CdContribuicaoApuradaPISCOFINS?: number;
  Sequencia?: number;
  VlBaseCalculoIPI?: number;
  FgConferido?: string;
};

export const nfEntradaItemService = {
  ...rpcFactory("nfEntradaItem"),
};
