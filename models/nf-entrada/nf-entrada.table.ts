import { TTableDef } from "@/types";

export const nf_entrada: TTableDef = {
  database: "plano",
  table: "NfMestre",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "filial_id",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "NroNf",
      label: "NroNf",
      name: "nota_id",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie_id",
      typeField: "string",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      typeField: "string",

      allowNull: false,
      primaryKey: true,
    },
    //-----
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "fornecedor_id",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtEmi",
      label: "DtEmi",
      name: "data_emissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtEntr",
      label: "DtEntr",
      name: "data_entrada",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "cfop",
      typeField: "int",
    },
    {
      field: "NopFiscal",
      label: "NopFiscal",
      name: "cfop_fiscal",
      typeField: "int",
    },
    {
      field: "TotNF",
      label: "TotNF",
      name: "total_nf",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseSubstituicao",
      label: "BaseSubstituicao",
      name: "BaseSubstituicao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "IPIBasCalc",
      label: "IPIBasCalc",
      name: "IPIBasCalc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "IPIVlr",
      label: "IPIVlr",
      name: "IPIVlr",
      typeField: "float",

      scale: 4,
    },
    {
      field: "IPIFrete",
      label: "IPIFrete",
      name: "IPIFrete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ICMSAliq",
      label: "ICMSAliq",
      name: "ICMSAliq",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ICMSBasCalc",
      label: "ICMSBasCalc",
      name: "ICMSBasCalc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ICMSVlr",
      label: "ICMSVlr",
      name: "ICMSVlr",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ICMSRetido",
      label: "ICMSRetido",
      name: "ICMSRetido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ICMSOperPropria",
      label: "ICMSOperPropria",
      name: "ICMSOperPropria",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ICMSFrete",
      label: "ICMSFrete",
      name: "ICMSFrete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Frete",
      label: "Frete",
      name: "Frete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Seguro",
      label: "Seguro",
      name: "Seguro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlMercadorias",
      label: "VlMercadorias",
      name: "VlMercadorias",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ConPag",
      label: "ConPag",
      name: "ConPag",
      typeField: "string",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgIPICompoeBase",
      label: "FgIPICompoeBase",
      name: "FgIPICompoeBase",
      typeField: "string",
    },
    {
      field: "VlNfComplementar",
      label: "VlNfComplementar",
      name: "VlNfComplementar",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgIPICompoeBaseSub",
      label: "FgIPICompoeBaseSub",
      name: "FgIPICompoeBaseSub",
      typeField: "string",
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",
    },
    {
      field: "IdParametro",
      label: "IdParametro",
      name: "IdParametro",
      typeField: "int",
    },
    {
      field: "GrupoFiscal",
      label: "GrupoFiscal",
      name: "GrupoFiscal",
      typeField: "int",
    },
    {
      field: "FgConferencia",
      label: "FgConferencia",
      name: "FgConferencia",
      typeField: "string",
    },
    {
      field: "VlRepasseICMS",
      label: "VlRepasseICMS",
      name: "VlRepasseICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgSomaICMSSub",
      label: "FgSomaICMSSub",
      name: "FgSomaICMSSub",
      typeField: "string",
    },
    {
      field: "DtConferencia",
      label: "DtConferencia",
      name: "DtConferencia",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "SgUsuario",
      label: "SgUsuario",
      name: "SgUsuario",
      typeField: "string",
    },
    {
      field: "dsObservacao",
      label: "dsObservacao",
      name: "dsObservacao",
      typeField: "string",
    },
    {
      field: "FgUtilizaPercRedBCIcms",
      label: "FgUtilizaPercRedBCIcms",
      name: "FgUtilizaPercRedBCIcms",
      typeField: "string",
    },
    {
      field: "VlDespAcessorias",
      label: "VlDespAcessorias",
      name: "VlDespAcessorias",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumNotaRelacionada",
      label: "NumNotaRelacionada",
      name: "NumNotaRelacionada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlNotaRelacionada",
      label: "VlNotaRelacionada",
      name: "VlNotaRelacionada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgDespesasCompoeTotal",
      label: "FgDespesasCompoeTotal",
      name: "FgDespesasCompoeTotal",
      typeField: "string",
    },
    {
      field: "NumChaveNfe",
      label: "NumChaveNfe",
      name: "NumChaveNfe",
      typeField: "string",
    },
    {
      field: "FgXML",
      label: "FgXML",
      name: "FgXML",
      typeField: "string",
    },
    {
      field: "FgGNRE",
      label: "FgGNRE",
      name: "FgGNRE",
      typeField: "string",
    },
    {
      field: "FgStatusGNRE",
      label: "FgStatusGNRE",
      name: "FgStatusGNRE",
      typeField: "string",
    },
    {
      field: "VlGNRE",
      label: "VlGNRE",
      name: "VlGNRE",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtValidacaoNota",
      label: "DtValidacaoNota",
      name: "DtValidacaoNota",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtRecolhimentoGNRE",
      label: "DtRecolhimentoGNRE",
      name: "DtRecolhimentoGNRE",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "IndicadorFormaPgto",
      label: "IndicadorFormaPgto",
      name: "IndicadorFormaPgto",
      typeField: "int",
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPISSubstituido",
      label: "VlPISSubstituido",
      name: "VlPISSubstituido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCofinsSubstituido",
      label: "VlCofinsSubstituido",
      name: "VlCofinsSubstituido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgFreteCompoeBaseICMS",
      label: "FgFreteCompoeBaseICMS",
      name: "FgFreteCompoeBaseICMS",
      typeField: "string",
    },
    {
      field: "FgFreteCompoeBaseIPI",
      label: "FgFreteCompoeBaseIPI",
      name: "FgFreteCompoeBaseIPI",
      typeField: "string",
    },
    {
      field: "FgFreteCompoeTotal",
      label: "FgFreteCompoeTotal",
      name: "FgFreteCompoeTotal",
      typeField: "string",
    },
    {
      field: "FgFreteCompoeVlProdutos",
      label: "FgFreteCompoeVlProdutos",
      name: "FgFreteCompoeVlProdutos",
      typeField: "string",
    },
    {
      field: "FgDespesasCompoeBaseICMS",
      label: "FgDespesasCompoeBaseICMS",
      name: "FgDespesasCompoeBaseICMS",
      typeField: "string",
    },
    {
      field: "FgDespesasCompoeBaseIPI",
      label: "FgDespesasCompoeBaseIPI",
      name: "FgDespesasCompoeBaseIPI",
      typeField: "string",
    },
    {
      field: "FgDespesasCompoeVlProdutos",
      label: "FgDespesasCompoeVlProdutos",
      name: "FgDespesasCompoeVlProdutos",
      typeField: "string",
    },
    {
      field: "FgSeguroCompoeVlProdutos",
      label: "FgSeguroCompoeVlProdutos",
      name: "FgSeguroCompoeVlProdutos",
      typeField: "string",
    },
    {
      field: "FgSeguroCompoeBaseICMS",
      label: "FgSeguroCompoeBaseICMS",
      name: "FgSeguroCompoeBaseICMS",
      typeField: "string",
    },
    {
      field: "FgSeguroCompoeBaseIPI",
      label: "FgSeguroCompoeBaseIPI",
      name: "FgSeguroCompoeBaseIPI",
      typeField: "string",
    },
    {
      field: "FgSeguroCompoeTotal",
      label: "FgSeguroCompoeTotal",
      name: "FgSeguroCompoeTotal",
      typeField: "string",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgLogEtiquetasLote",
      label: "FgLogEtiquetasLote",
      name: "FgLogEtiquetasLote",
      typeField: "string",
    },
    {
      field: "FgUtilizaVlICMSSTProdutos",
      label: "FgUtilizaVlICMSSTProdutos",
      name: "FgUtilizaVlICMSSTProdutos",
      typeField: "string",
    },
    {
      field: "SituacaoDoc",
      label: "SituacaoDoc",
      name: "SituacaoDoc",
      typeField: "int",
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlFreteConhecTransp",
      label: "VlFreteConhecTransp",
      name: "VlFreteConhecTransp",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumNotaConhecTransp",
      label: "NumNotaConhecTransp",
      name: "NumNotaConhecTransp",
      typeField: "int",
    },
    {
      field: "FgFreteCompoeBasePIS",
      label: "FgFreteCompoeBasePIS",
      name: "FgFreteCompoeBasePIS",
      typeField: "string",
    },
    {
      field: "FgFreteCompoeBaseCOFINS",
      label: "FgFreteCompoeBaseCOFINS",
      name: "FgFreteCompoeBaseCOFINS",
      typeField: "string",
    },
    {
      field: "VlTotalFCPST",
      label: "VlTotalFCPST",
      name: "VlTotalFCPST",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgFCPSTCompoeVlTotalProdutos",
      label: "FgFCPSTCompoeVlTotalProdutos",
      name: "FgFCPSTCompoeVlTotalProdutos",
      typeField: "string",
    },
    {
      field: "FgFCPSTCompoeVlTotalNota",
      label: "FgFCPSTCompoeVlTotalNota",
      name: "FgFCPSTCompoeVlTotalNota",
      typeField: "string",
    },
    {
      field: "FgFCPSTCompoeVlCustoProduto",
      label: "FgFCPSTCompoeVlCustoProduto",
      name: "FgFCPSTCompoeVlCustoProduto",
      typeField: "string",
    },
  ],
};
