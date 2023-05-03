import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TNfEntradaPk {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
  modelo_id?: string;
}
export interface TNfEntrada extends TNfEntradaPk {
  fornecedor_id?: number;
  data_emissao?: string;
  data_entrada?: string;
  cfop?: number;
  cfop_fiscal?: number;
  total_nf?: number;
  BaseSubstituicao?: number;
  IPIBasCalc?: number;
  IPIVlr?: number;
  IPIFrete?: number;
  ICMSAliq?: number;
  ICMSBasCalc?: number;
  ICMSVlr?: number;
  ICMSRetido?: number;
  ICMSOperPropria?: number;
  ICMSFrete?: number;
  Frete?: number;
  Seguro?: number;
  DtValidacao?: string;
  VlMercadorias?: number;
  ConPag?: string;
  Tipo?: string;
  Horario?: string;
  FgIPICompoeBase?: string;
  VlNfComplementar?: number;
  FgIPICompoeBaseSub?: string;
  FgEstoque?: string;
  IdParametro?: number;
  GrupoFiscal?: number;
  FgConferencia?: string;
  VlRepasseICMS?: number;
  FgSomaICMSSub?: string;
  DtConferencia?: string;
  SgUsuario?: string;
  dsObservacao?: string;
  FgUtilizaPercRedBCIcms?: string;
  VlDespAcessorias?: number;
  NumNotaRelacionada?: number;
  VlNotaRelacionada?: number;
  FgDespesasCompoeTotal?: string;
  NumChaveNfe?: string;
  FgXML?: string;
  FgGNRE?: string;
  FgStatusGNRE?: string;
  VlGNRE?: number;
  DtValidacaoNota?: string;
  DtRecolhimentoGNRE?: string;
  IndicadorFormaPgto?: number;
  VlPIS?: number;
  VlCofins?: number;
  VlPISSubstituido?: number;
  VlCofinsSubstituido?: number;
  FgFreteCompoeBaseICMS?: string;
  FgFreteCompoeBaseIPI?: string;
  FgFreteCompoeTotal?: string;
  FgFreteCompoeVlProdutos?: string;
  FgDespesasCompoeBaseICMS?: string;
  FgDespesasCompoeBaseIPI?: string;
  FgDespesasCompoeVlProdutos?: string;
  FgSeguroCompoeVlProdutos?: string;
  FgSeguroCompoeBaseICMS?: string;
  FgSeguroCompoeBaseIPI?: string;
  FgSeguroCompoeTotal?: string;
  NumPedido?: number;
  FgLogEtiquetasLote?: string;
  FgUtilizaVlICMSSTProdutos?: string;
  SituacaoDoc?: number;
  VlDesconto?: number;
  VlFreteConhecTransp?: number;
  NumNotaConhecTransp?: number;
  FgFreteCompoeBasePIS?: string;
  FgFreteCompoeBaseCOFINS?: string;
  VlTotalFCPST?: number;
  FgFCPSTCompoeVlTotalProdutos?: string;
  FgFCPSTCompoeVlTotalNota?: string;
  FgFCPSTCompoeVlCustoProduto?: string;
}

export type TNfEntradaFields = keyof Required<TNfEntrada>;

export type TNfEntradaIds = {
  [pk in keyof Required<TNfEntradaPk>]: any;
};
export type TNfEntradaSelect = TSelect<TNfEntradaFields>;
export type TNfEntradaWhere = TWhere<TNfEntradaFields>;
export type TNfEntradaOrder = TOrder<TNfEntradaFields>;

export type TNfEntradaSchema = () => Promise<TFieldDef[]>;
export type TNfEntradaClear = () => Promise<TNfEntrada>;
export type TNfEntradaList = (args: {
  where?: TWhere<TNfEntradaFields>[];
  order?: TOrder<TNfEntradaFields>[];
  limit?: number;
  select?: TSelect<TNfEntradaFields>;
}) => Promise<TNfEntrada[]>;
export type TNfEntradaRead = (args: {
  id: TNfEntradaIds;
  select?: TSelect<TNfEntradaFields>;
}) => Promise<TNfEntrada>;

export type TNfEntradaCreate = (args: {
  data: TNfEntrada;
  select?: TSelect<TNfEntradaFields>;
}) => Promise<TNfEntrada>;
export type TNfEntradaUpdate = (args: {
  id: TNfEntradaIds;
  data: TNfEntrada;
  select?: TSelect<TNfEntradaFields>;
}) => Promise<TNfEntrada>;
export type TNfEntradaDel = (args: { id: TNfEntradaIds }) => Promise<number>;

//#region def
export type TNfEntradaTransferenciaCreate = (args: {
  controles: string[];
}) => Promise<boolean>;
//#endregion

export type TNfEntradaModel = {
  query: {
    list: TNfEntradaList;
    read: TNfEntradaRead;
  };
  mutation: {
    create: TNfEntradaCreate;
    update: TNfEntradaUpdate;
    del: TNfEntradaDel;
    transferenciaCreate: TNfEntradaTransferenciaCreate;
  };
};

export type TNfEntradaRpc = TNfEntradaModel;
