import { TField, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TNfSaidaItemPk {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
  modelo_id?: string;
}
export interface TNfSaidaItem extends TNfSaidaItemPk {
  produto_plano_id?: string;
  sequencia?: number;
  CdProdutoAssociado?: string;
  CdRefEstoque?: string;
  quantidade?: number;
  quantidade_atendida?: number;
  ConversaoMedida?: number;
  Correcao?: number;
  VlUnitario?: number;
  VlTotal?: number;
  PercDesconto?: number;
  valor_liquido?: number;
  VlCusto?: number;
  BaseSub?: number;
  eh_estoque?: string;
  eh_kit?: string;
  eh_peso?: string;
  imprime_componente?: string;
  Irrf?: number;
  MargemSub?: number;
  Peso?: string;
  PesoBruto?: number;
  PesoLiq?: number;
  ReducaoICMS?: number;
  TaxaFCA?: number;
  TipoMovimentacao?: string;
  VlComissaoPrazo?: number;
  VlComissaoVista?: number;
  CdVendedor?: number;
  CdVendedorExtra?: number;
  PercComisVista?: number;
  PercComisPrazo?: number;
  PercReducaoComissao?: number;
  VlICMS?: number;
  VlIcmsSub?: number;
  VlIPI?: number;
  VlISS?: number;
  CustoMedio?: number;
  ComplementoDescricao?: string;
  eh_etiqueta?: string;
  PercLimiteComissao?: number;
  ComplementoDesc?: string;
  BaseCalculoIPI?: number;
  NumEtiqKanBan?: number;
  NumOrdemCompra?: number;
  VlComissaoVistaExtra?: number;
  VlComissaoPrazoExtra?: number;
  DtEmissao?: string;
  Tipo?: string;
  CRM?: string;
  Unidade?: string;
  VlImpostoDiferido?: number;
  Fg6142?: string;
  cfop?: number;
  cfop_fiscal?: number;
  fgBuscaDCB?: string;
  VlPrecoAnvisa?: number;
  AliqRedBaseST?: number;
  DescComplementarProd?: string;
  VlVendaOriginal?: number;
  SituacaoTributariaIPI?: number;
  CdEnquadramentoIPI?: string;
  AliquotaIPI?: number;
  AliquotaPIS?: number;
  VlPIS?: number;
  AliquotaCOFINS?: number;
  VlCOFINS?: number;
  SituacaoTributariaCOFINS?: number;
  BaseCalculoCOFINS?: number;
  SituacaoTributariaPIS?: number;
  BaseCalculoPIS?: number;
  AliquotaICMS?: number;
  BaseCalculoICMS?: number;
  SituacaoTributariaICMS?: number;
  FgICMSDiferimentoTotal?: string;
  CdBaseCalculoCreditoPISCOFINS?: number;
  CdTipoCreditoPISCOFINS?: number;
  CdContribuicaoApuradaPISCOFINS?: number;
  VlAproximadoImpostoItem?: number;
  VlFreteItem?: number;
  VlSeguroItem?: number;
  VlDespesaAcessoriaItem?: number;
  VlDescontoGerente?: number;
  FgConsideraItemNfe?: string;
  OrigemMercadoria?: number;
  PercentualMVA?: number;
  PercReducaoBaseSub?: number;
  PercICMSSub?: number;
  UFSub?: string;
  VlBaseCalculoICMSRetido?: number;
  VlICMSRetido?: number;
  VlBaseCalculoICMSDest?: number;
  VlICMSDest?: number;
  PercBaseOperacaoPropria?: number;
  AliquotaCreditoSimples?: number;
  VlCreditoSimples?: number;
  ModalidadeBaseICMS?: number;
  ModalidadeBaseSub?: number;
  MotivoDesoneracaoICMS?: number;
  FgEmprestimo?: string;
  PercDiferimento?: number;
  QuantidadeLitros?: number;
  VlIPILitro?: number;
  VlPISLitro?: number;
  VlCOFINSLitro?: number;
  VlAproximadoImpostoFederal?: number;
  VlAproximadoImpostoEstadual?: number;
  VlAproximadoImpostoMunicipal?: number;
  PlanoContaSped?: number;
  PercFCP?: number;
  VlBaseFCP?: number;
  VlFCP?: number;
  PercFCPST?: number;
  VlBaseFCPST?: number;
  VlFCPST?: number;
  VlBaseCalculoSTRetido?: number;
  VlICMSSTRetido?: number;
  AliquotaSTRetido?: number;
  VlICMSSubstituto?: number;
}

export type TNfSaidaItemFields = keyof Required<TNfSaidaItem>;

export type TNfSaidaItemIds = {
  [pk in keyof Required<TNfSaidaItemPk>]: any;
};
export type TNfSaidaItemSelect = TSelect<TNfSaidaItemFields>;
export type TNfSaidaItemWhere = TWhere<TNfSaidaItemFields>;
export type TNfSaidaItemOrder = TOrder<TNfSaidaItemFields>;

export type TNfSaidaItemSchema = () => Promise<TField[]>;
export type TNfSaidaItemClear = () => Promise<TNfSaidaItem>;
export type TNfSaidaItemList = (args: {
  where?: TWhere<TNfSaidaItemFields>[];
  order?: TOrder<TNfSaidaItemFields>[];
  limit?: number;
  select?: TSelect<TNfSaidaItemFields>;
}) => Promise<TNfSaidaItem[]>;
export type TNfSaidaItemRead = (args: {
  id: TNfSaidaItemIds;
  select?: TSelect<TNfSaidaItemFields>;
}) => Promise<TNfSaidaItem>;

export type TNfSaidaItemCreate = (args: {
  data: TNfSaidaItem;
  select?: TSelect<TNfSaidaItemFields>;
}) => Promise<TNfSaidaItem>;
export type TNfSaidaItemUpdate = (args: {
  id: TNfSaidaItemIds;
  data: TNfSaidaItem;
  select?: TSelect<TNfSaidaItemFields>;
}) => Promise<TNfSaidaItem>;
export type TNfSaidaItemDel = (args: {
  id: TNfSaidaItemIds;
}) => Promise<number>;

//#region def
//#endregion

export type TNfSaidaItemCrud = {
  query: {
    schema: TNfSaidaItemSchema;
    clear: TNfSaidaItemClear;
    list: TNfSaidaItemList;
    read: TNfSaidaItemRead;
  };
  mutation: {
    create: TNfSaidaItemCreate;
    update: TNfSaidaItemUpdate;
    del: TNfSaidaItemDel;
  };
};

export type TNfSaidaItemModel = TNfSaidaItemCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TNfSaidaItemRpc = TNfSaidaItemModel;
