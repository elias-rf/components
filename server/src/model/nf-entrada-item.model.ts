import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TNfEntradaItem = {
  filial_id?: number;
  nota_id?: string;
  serie_id?: string;
  modelo_id?: string;
  fornecedor_id?: number;
  produto_id?: string;
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

export class NfEntradaItemModel extends EntityModel<TNfEntradaItem> {
  constructor(connections: TConnections) {
    super(connections, "nfEntradaItem");
  }
}
