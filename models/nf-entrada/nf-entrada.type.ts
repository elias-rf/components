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
