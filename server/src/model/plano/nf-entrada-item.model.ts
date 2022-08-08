import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type NfEntradaItemRecord = {
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

export class NfEntradaItemModel extends Model<NfEntradaItemRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "nfEntradaItem",
      "NfItem",
      ["CdEmpresa", "NroNf", "Serie", "Modelo", "Sequencia"],
      [
        "CdEmpresa",
        "NroNf",
        "Serie",
        "Modelo",
        "CdFornecedor",
        "CdProduto",
        "FgCusto",
        "FgEtiqueta",
        "PercIcms",
        "PercIpi",
        "Quantidade",
        "TipoMovimentacao",
        "VlAcrescItem",
        "VlDescItem",
        "VlrIcms",
        "VlrIpi",
        "VlTotItem",
        "TipoTributacao",
        "VlBaseSub",
        "VlIcmsSub",
        "DtEntr",
        "FgEstoque",
        "VlRepasseICMSItem",
        "FgICMSJaRecolhido",
        "PrecPMC",
        "VlRelacionado",
        "FgCompoeBaseSub",
        "Nop",
        "NopFiscalItem",
        "VlBaseCalculoICMS",
        "VlBrutoUnitario",
        "VlLiquidoUnitario",
        "CdBaseCalculoCreditoPISCOFINS",
        "CdTipoCreditoPISCOFINS",
        "CdContribuicaoApuradaPISCOFINS",
        "Sequencia",
        "VlBaseCalculoIPI",
        "FgConferido",
      ]
    );
  }
}
