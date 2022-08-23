import { TEntity } from "@er/types/*";

export const NfMestre: TEntity =
  {
  "database": "plano",
  "table": "NfMestre",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NroNf",
      "label": "NroNf",
      "name": "NroNf",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtEmi",
      "label": "DtEmi",
      "name": "DtEmi",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtEntr",
      "label": "DtEntr",
      "name": "DtEntr",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 2
    },
    {
      "field": "NopFiscal",
      "label": "NopFiscal",
      "name": "NopFiscal",
      "type": "int",
      "size": 2
    },
    {
      "field": "TotNF",
      "label": "TotNF",
      "name": "TotNF",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseSubstituicao",
      "label": "BaseSubstituicao",
      "name": "BaseSubstituicao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "IPIBasCalc",
      "label": "IPIBasCalc",
      "name": "IPIBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "IPIVlr",
      "label": "IPIVlr",
      "name": "IPIVlr",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "IPIFrete",
      "label": "IPIFrete",
      "name": "IPIFrete",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ICMSAliq",
      "label": "ICMSAliq",
      "name": "ICMSAliq",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ICMSBasCalc",
      "label": "ICMSBasCalc",
      "name": "ICMSBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ICMSVlr",
      "label": "ICMSVlr",
      "name": "ICMSVlr",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ICMSRetido",
      "label": "ICMSRetido",
      "name": "ICMSRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ICMSOperPropria",
      "label": "ICMSOperPropria",
      "name": "ICMSOperPropria",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ICMSFrete",
      "label": "ICMSFrete",
      "name": "ICMSFrete",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Frete",
      "label": "Frete",
      "name": "Frete",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Seguro",
      "label": "Seguro",
      "name": "Seguro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtValidacao",
      "label": "DtValidacao",
      "name": "DtValidacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlMercadorias",
      "label": "VlMercadorias",
      "name": "VlMercadorias",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ConPag",
      "label": "ConPag",
      "name": "ConPag",
      "type": "string",
      "size": 1
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgIPICompoeBase",
      "label": "FgIPICompoeBase",
      "name": "FgIPICompoeBase",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlNfComplementar",
      "label": "VlNfComplementar",
      "name": "VlNfComplementar",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgIPICompoeBaseSub",
      "label": "FgIPICompoeBaseSub",
      "name": "FgIPICompoeBaseSub",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "IdParametro",
      "label": "IdParametro",
      "name": "IdParametro",
      "type": "int",
      "size": 2
    },
    {
      "field": "GrupoFiscal",
      "label": "GrupoFiscal",
      "name": "GrupoFiscal",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgConferencia",
      "label": "FgConferencia",
      "name": "FgConferencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlRepasseICMS",
      "label": "VlRepasseICMS",
      "name": "VlRepasseICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgSomaICMSSub",
      "label": "FgSomaICMSSub",
      "name": "FgSomaICMSSub",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtConferencia",
      "label": "DtConferencia",
      "name": "DtConferencia",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "SgUsuario",
      "label": "SgUsuario",
      "name": "SgUsuario",
      "type": "string",
      "size": 10
    },
    {
      "field": "dsObservacao",
      "label": "dsObservacao",
      "name": "dsObservacao",
      "type": "string",
      "size": 300
    },
    {
      "field": "FgUtilizaPercRedBCIcms",
      "label": "FgUtilizaPercRedBCIcms",
      "name": "FgUtilizaPercRedBCIcms",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlDespAcessorias",
      "label": "VlDespAcessorias",
      "name": "VlDespAcessorias",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumNotaRelacionada",
      "label": "NumNotaRelacionada",
      "name": "NumNotaRelacionada",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlNotaRelacionada",
      "label": "VlNotaRelacionada",
      "name": "VlNotaRelacionada",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgDespesasCompoeTotal",
      "label": "FgDespesasCompoeTotal",
      "name": "FgDespesasCompoeTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumChaveNfe",
      "label": "NumChaveNfe",
      "name": "NumChaveNfe",
      "type": "string",
      "size": 64
    },
    {
      "field": "FgXML",
      "label": "FgXML",
      "name": "FgXML",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGNRE",
      "label": "FgGNRE",
      "name": "FgGNRE",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgStatusGNRE",
      "label": "FgStatusGNRE",
      "name": "FgStatusGNRE",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlGNRE",
      "label": "VlGNRE",
      "name": "VlGNRE",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtValidacaoNota",
      "label": "DtValidacaoNota",
      "name": "DtValidacaoNota",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtRecolhimentoGNRE",
      "label": "DtRecolhimentoGNRE",
      "name": "DtRecolhimentoGNRE",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "IndicadorFormaPgto",
      "label": "IndicadorFormaPgto",
      "name": "IndicadorFormaPgto",
      "type": "int",
      "size": 2
    },
    {
      "field": "VlPIS",
      "label": "VlPIS",
      "name": "VlPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCofins",
      "label": "VlCofins",
      "name": "VlCofins",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPISSubstituido",
      "label": "VlPISSubstituido",
      "name": "VlPISSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCofinsSubstituido",
      "label": "VlCofinsSubstituido",
      "name": "VlCofinsSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgFreteCompoeBaseICMS",
      "label": "FgFreteCompoeBaseICMS",
      "name": "FgFreteCompoeBaseICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFreteCompoeBaseIPI",
      "label": "FgFreteCompoeBaseIPI",
      "name": "FgFreteCompoeBaseIPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFreteCompoeTotal",
      "label": "FgFreteCompoeTotal",
      "name": "FgFreteCompoeTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFreteCompoeVlProdutos",
      "label": "FgFreteCompoeVlProdutos",
      "name": "FgFreteCompoeVlProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDespesasCompoeBaseICMS",
      "label": "FgDespesasCompoeBaseICMS",
      "name": "FgDespesasCompoeBaseICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDespesasCompoeBaseIPI",
      "label": "FgDespesasCompoeBaseIPI",
      "name": "FgDespesasCompoeBaseIPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDespesasCompoeVlProdutos",
      "label": "FgDespesasCompoeVlProdutos",
      "name": "FgDespesasCompoeVlProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSeguroCompoeVlProdutos",
      "label": "FgSeguroCompoeVlProdutos",
      "name": "FgSeguroCompoeVlProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSeguroCompoeBaseICMS",
      "label": "FgSeguroCompoeBaseICMS",
      "name": "FgSeguroCompoeBaseICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSeguroCompoeBaseIPI",
      "label": "FgSeguroCompoeBaseIPI",
      "name": "FgSeguroCompoeBaseIPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSeguroCompoeTotal",
      "label": "FgSeguroCompoeTotal",
      "name": "FgSeguroCompoeTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgLogEtiquetasLote",
      "label": "FgLogEtiquetasLote",
      "name": "FgLogEtiquetasLote",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgUtilizaVlICMSSTProdutos",
      "label": "FgUtilizaVlICMSSTProdutos",
      "name": "FgUtilizaVlICMSSTProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "SituacaoDoc",
      "label": "SituacaoDoc",
      "name": "SituacaoDoc",
      "type": "int",
      "size": 4
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlFreteConhecTransp",
      "label": "VlFreteConhecTransp",
      "name": "VlFreteConhecTransp",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumNotaConhecTransp",
      "label": "NumNotaConhecTransp",
      "name": "NumNotaConhecTransp",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgFreteCompoeBasePIS",
      "label": "FgFreteCompoeBasePIS",
      "name": "FgFreteCompoeBasePIS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFreteCompoeBaseCOFINS",
      "label": "FgFreteCompoeBaseCOFINS",
      "name": "FgFreteCompoeBaseCOFINS",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlTotalFCPST",
      "label": "VlTotalFCPST",
      "name": "VlTotalFCPST",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgFCPSTCompoeVlTotalProdutos",
      "label": "FgFCPSTCompoeVlTotalProdutos",
      "name": "FgFCPSTCompoeVlTotalProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFCPSTCompoeVlTotalNota",
      "label": "FgFCPSTCompoeVlTotalNota",
      "name": "FgFCPSTCompoeVlTotalNota",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFCPSTCompoeVlCustoProduto",
      "label": "FgFCPSTCompoeVlCustoProduto",
      "name": "FgFCPSTCompoeVlCustoProduto",
      "type": "string",
      "size": 1
    }
  ]
}
