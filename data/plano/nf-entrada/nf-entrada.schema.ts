import { TSchema } from '@/schemas/schema.type.js'

export const nfEntradaSchema: TSchema = {
  table: 'NfMestre',
  primary: ['CdEmpresa', 'Modelo', 'NroNf', 'Serie'] as const,
  fields: [
    'CdEmpresa',
    'NroNf',
    'Serie',
    'Modelo',
    'CdFornecedor',
    'DtEmi',
    'DtEntr',
    'Nop',
    'NopFiscal',
    'TotNF',
    'BaseSubstituicao',
    'IPIBasCalc',
    'IPIVlr',
    'IPIFrete',
    'ICMSAliq',
    'ICMSBasCalc',
    'ICMSVlr',
    'ICMSRetido',
    'ICMSOperPropria',
    'ICMSFrete',
    'Frete',
    'Seguro',
    'DtValidacao',
    'VlMercadorias',
    'ConPag',
    'Tipo',
    'Horario',
    'FgIPICompoeBase',
    'VlNfComplementar',
    'FgIPICompoeBaseSub',
    'FgEstoque',
    'IdParametro',
    'GrupoFiscal',
    'FgConferencia',
    'VlRepasseICMS',
    'FgSomaICMSSub',
    'DtConferencia',
    'SgUsuario',
    'dsObservacao',
    'FgUtilizaPercRedBCIcms',
    'VlDespAcessorias',
    'NumNotaRelacionada',
    'VlNotaRelacionada',
    'FgDespesasCompoeTotal',
    'NumChaveNfe',
    'FgXML',
    'FgGNRE',
    'FgStatusGNRE',
    'VlGNRE',
    'DtValidacaoNota',
    'DtRecolhimentoGNRE',
    'IndicadorFormaPgto',
    'VlPIS',
    'VlCofins',
    'VlPISSubstituido',
    'VlCofinsSubstituido',
    'FgFreteCompoeBaseICMS',
    'FgFreteCompoeBaseIPI',
    'FgFreteCompoeTotal',
    'FgFreteCompoeVlProdutos',
    'FgDespesasCompoeBaseICMS',
    'FgDespesasCompoeBaseIPI',
    'FgDespesasCompoeVlProdutos',
    'FgSeguroCompoeVlProdutos',
    'FgSeguroCompoeBaseICMS',
    'FgSeguroCompoeBaseIPI',
    'FgSeguroCompoeTotal',
    'NumPedido',
    'FgLogEtiquetasLote',
    'FgUtilizaVlICMSSTProdutos',
    'SituacaoDoc',
    'VlDesconto',
    'VlFreteConhecTransp',
    'NumNotaConhecTransp',
    'FgFreteCompoeBasePIS',
    'FgFreteCompoeBaseCOFINS',
    'VlTotalFCPST',
    'FgFCPSTCompoeVlTotalProdutos',
    'FgFCPSTCompoeVlTotalNota',
    'FgFCPSTCompoeVlCustoProduto',
  ] as const,
}
