import { TTableDef } from "@/types";

export const nf_saida_item: TTableDef = {
  database: "plano",
  table: "ItemNota",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      primaryKey: true,
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "nota_id",
      primaryKey: true,
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie_id",
      primaryKey: true,
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      primaryKey: true,
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "produto_plano_id",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "sequencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
      size: 15,
    },
    {
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",
      size: 15,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeAtendida",
      label: "QtdeAtendida",
      name: "quantidade_atendida",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ConversaoMedida",
      label: "ConversaoMedida",
      name: "ConversaoMedida",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDesconto",
      label: "PercDesconto",
      name: "PercDesconto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "valor_liquido",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "BaseSub",
      label: "BaseSub",
      name: "BaseSub",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "eh_estoque",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgKit",
      label: "FgKit",
      name: "eh_kit",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgPeso",
      label: "FgPeso",
      name: "eh_peso",
      typeField: "string",
      size: 1,
    },
    {
      field: "ImprimeComponentes",
      label: "ImprimeComponentes",
      name: "imprime_componente",
      typeField: "string",
      size: 1,
    },
    {
      field: "Irrf",
      label: "Irrf",
      name: "Irrf",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "MargemSub",
      label: "MargemSub",
      name: "MargemSub",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Peso",
      label: "Peso",
      name: "Peso",
      typeField: "string",
      size: 10,
    },
    {
      field: "PesoBruto",
      label: "PesoBruto",
      name: "PesoBruto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PesoLiq",
      label: "PesoLiq",
      name: "PesoLiq",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ReducaoICMS",
      label: "ReducaoICMS",
      name: "ReducaoICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TaxaFCA",
      label: "TaxaFCA",
      name: "TaxaFCA",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "VlComissaoPrazo",
      label: "VlComissaoPrazo",
      name: "VlComissaoPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlComissaoVista",
      label: "VlComissaoVista",
      name: "VlComissaoVista",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdVendedorExtra",
      label: "CdVendedorExtra",
      name: "CdVendedorExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComisVista",
      label: "PercComisVista",
      name: "PercComisVista",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComisPrazo",
      label: "PercComisPrazo",
      name: "PercComisPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercReducaoComissao",
      label: "PercReducaoComissao",
      name: "PercReducaoComissao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIcmsSub",
      label: "VlIcmsSub",
      name: "VlIcmsSub",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlISS",
      label: "VlISS",
      name: "VlISS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CustoMedio",
      label: "CustoMedio",
      name: "CustoMedio",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ComplementoDescricao",
      label: "ComplementoDescricao",
      name: "ComplementoDescricao",
      typeField: "string",
      size: 20,
    },
    {
      field: "FgEtiqueta",
      label: "FgEtiqueta",
      name: "eh_etiqueta",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercLimiteComissao",
      label: "PercLimiteComissao",
      name: "PercLimiteComissao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ComplementoDesc",
      label: "ComplementoDesc",
      name: "ComplementoDesc",
      typeField: "string",
      size: 15,
    },
    {
      field: "BaseCalculoIPI",
      label: "BaseCalculoIPI",
      name: "BaseCalculoIPI",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumEtiqKanBan",
      label: "NumEtiqKanBan",
      name: "NumEtiqKanBan",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumOrdemCompra",
      label: "NumOrdemCompra",
      name: "NumOrdemCompra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlComissaoVistaExtra",
      label: "VlComissaoVistaExtra",
      name: "VlComissaoVistaExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlComissaoPrazoExtra",
      label: "VlComissaoPrazoExtra",
      name: "VlComissaoPrazoExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
      size: 16,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
      size: 3,
    },
    {
      field: "VlImpostoDiferido",
      label: "VlImpostoDiferido",
      name: "VlImpostoDiferido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Fg6142",
      label: "Fg6142",
      name: "Fg6142",
      typeField: "string",
      size: 1,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "cfop",
      typeField: "int",
      size: 4,
    },
    {
      field: "NopFiscalItem",
      label: "NopFiscalItem",
      name: "cfop_fiscal",
      typeField: "int",
      size: 4,
    },
    {
      field: "fgBuscaDCB",
      label: "fgBuscaDCB",
      name: "fgBuscaDCB",
      typeField: "string",
      size: 10,
    },
    {
      field: "VlPrecoAnvisa",
      label: "VlPrecoAnvisa",
      name: "VlPrecoAnvisa",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "AliqRedBaseST",
      label: "AliqRedBaseST",
      name: "AliqRedBaseST",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescComplementarProd",
      label: "DescComplementarProd",
      name: "DescComplementarProd",
      typeField: "string",
      size: 1024,
    },
    {
      field: "VlVendaOriginal",
      label: "VlVendaOriginal",
      name: "VlVendaOriginal",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "SituacaoTributariaIPI",
      label: "SituacaoTributariaIPI",
      name: "SituacaoTributariaIPI",
      typeField: "int",
      size: 2,
    },
    {
      field: "CdEnquadramentoIPI",
      label: "CdEnquadramentoIPI",
      name: "CdEnquadramentoIPI",
      typeField: "string",
      size: 3,
    },
    {
      field: "AliquotaIPI",
      label: "AliquotaIPI",
      name: "AliquotaIPI",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaCOFINS",
      label: "AliquotaCOFINS",
      name: "AliquotaCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SituacaoTributariaCOFINS",
      label: "SituacaoTributariaCOFINS",
      name: "SituacaoTributariaCOFINS",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalculoCOFINS",
      label: "BaseCalculoCOFINS",
      name: "BaseCalculoCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SituacaoTributariaPIS",
      label: "SituacaoTributariaPIS",
      name: "SituacaoTributariaPIS",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalculoPIS",
      label: "BaseCalculoPIS",
      name: "BaseCalculoPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "BaseCalculoICMS",
      label: "BaseCalculoICMS",
      name: "BaseCalculoICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SituacaoTributariaICMS",
      label: "SituacaoTributariaICMS",
      name: "SituacaoTributariaICMS",
      typeField: "int",
      size: 2,
    },
    {
      field: "FgICMSDiferimentoTotal",
      label: "FgICMSDiferimentoTotal",
      name: "FgICMSDiferimentoTotal",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdBaseCalculoCreditoPISCOFINS",
      label: "CdBaseCalculoCreditoPISCOFINS",
      name: "CdBaseCalculoCreditoPISCOFINS",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdTipoCreditoPISCOFINS",
      label: "CdTipoCreditoPISCOFINS",
      name: "CdTipoCreditoPISCOFINS",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdContribuicaoApuradaPISCOFINS",
      label: "CdContribuicaoApuradaPISCOFINS",
      name: "CdContribuicaoApuradaPISCOFINS",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "VlAproximadoImpostoItem",
      label: "VlAproximadoImpostoItem",
      name: "VlAproximadoImpostoItem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlFreteItem",
      label: "VlFreteItem",
      name: "VlFreteItem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlSeguroItem",
      label: "VlSeguroItem",
      name: "VlSeguroItem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDespesaAcessoriaItem",
      label: "VlDespesaAcessoriaItem",
      name: "VlDespesaAcessoriaItem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDescontoGerente",
      label: "VlDescontoGerente",
      name: "VlDescontoGerente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgConsideraItemNfe",
      label: "FgConsideraItemNfe",
      name: "FgConsideraItemNfe",
      typeField: "string",
      size: 1,
    },
    {
      field: "OrigemMercadoria",
      label: "OrigemMercadoria",
      name: "OrigemMercadoria",
      typeField: "int",
      size: 2,
    },
    {
      field: "PercentualMVA",
      label: "PercentualMVA",
      name: "PercentualMVA",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercReducaoBaseSub",
      label: "PercReducaoBaseSub",
      name: "PercReducaoBaseSub",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercICMSSub",
      label: "PercICMSSub",
      name: "PercICMSSub",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "UFSub",
      label: "UFSub",
      name: "UFSub",
      typeField: "string",
      size: 2,
    },
    {
      field: "VlBaseCalculoICMSRetido",
      label: "VlBaseCalculoICMSRetido",
      name: "VlBaseCalculoICMSRetido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlICMSRetido",
      label: "VlICMSRetido",
      name: "VlICMSRetido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoICMSDest",
      label: "VlBaseCalculoICMSDest",
      name: "VlBaseCalculoICMSDest",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlICMSDest",
      label: "VlICMSDest",
      name: "VlICMSDest",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercBaseOperacaoPropria",
      label: "PercBaseOperacaoPropria",
      name: "PercBaseOperacaoPropria",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaCreditoSimples",
      label: "AliquotaCreditoSimples",
      name: "AliquotaCreditoSimples",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCreditoSimples",
      label: "VlCreditoSimples",
      name: "VlCreditoSimples",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ModalidadeBaseICMS",
      label: "ModalidadeBaseICMS",
      name: "ModalidadeBaseICMS",
      typeField: "int",
      size: 2,
    },
    {
      field: "ModalidadeBaseSub",
      label: "ModalidadeBaseSub",
      name: "ModalidadeBaseSub",
      typeField: "int",
      size: 2,
    },
    {
      field: "MotivoDesoneracaoICMS",
      label: "MotivoDesoneracaoICMS",
      name: "MotivoDesoneracaoICMS",
      typeField: "int",
      size: 2,
    },
    {
      field: "FgEmprestimo",
      label: "FgEmprestimo",
      name: "FgEmprestimo",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercDiferimento",
      label: "PercDiferimento",
      name: "PercDiferimento",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QuantidadeLitros",
      label: "QuantidadeLitros",
      name: "QuantidadeLitros",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIPILitro",
      label: "VlIPILitro",
      name: "VlIPILitro",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlPISLitro",
      label: "VlPISLitro",
      name: "VlPISLitro",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCOFINSLitro",
      label: "VlCOFINSLitro",
      name: "VlCOFINSLitro",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAproximadoImpostoFederal",
      label: "VlAproximadoImpostoFederal",
      name: "VlAproximadoImpostoFederal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAproximadoImpostoEstadual",
      label: "VlAproximadoImpostoEstadual",
      name: "VlAproximadoImpostoEstadual",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAproximadoImpostoMunicipal",
      label: "VlAproximadoImpostoMunicipal",
      name: "VlAproximadoImpostoMunicipal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PlanoContaSped",
      label: "PlanoContaSped",
      name: "PlanoContaSped",
      typeField: "int",
      size: 9,
    },
    {
      field: "PercFCP",
      label: "PercFCP",
      name: "PercFCP",
      typeField: "int",
      size: 5,
      scale: 2,
    },
    {
      field: "VlBaseFCP",
      label: "VlBaseFCP",
      name: "VlBaseFCP",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlFCP",
      label: "VlFCP",
      name: "VlFCP",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercFCPST",
      label: "PercFCPST",
      name: "PercFCPST",
      typeField: "int",
      size: 5,
      scale: 2,
    },
    {
      field: "VlBaseFCPST",
      label: "VlBaseFCPST",
      name: "VlBaseFCPST",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlFCPST",
      label: "VlFCPST",
      name: "VlFCPST",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoSTRetido",
      label: "VlBaseCalculoSTRetido",
      name: "VlBaseCalculoSTRetido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlICMSSTRetido",
      label: "VlICMSSTRetido",
      name: "VlICMSSTRetido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaSTRetido",
      label: "AliquotaSTRetido",
      name: "AliquotaSTRetido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlICMSSubstituto",
      label: "VlICMSSubstituto",
      name: "VlICMSSubstituto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
