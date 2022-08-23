import { TEntity } from "@er/types/*";

export const ItemNota: TEntity =
  {
  "database": "plano",
  "table": "ItemNota",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
      "type": "string",
      "size": 15
    },
    {
      "field": "CdRefEstoque",
      "label": "CdRefEstoque",
      "name": "CdRefEstoque",
      "type": "string",
      "size": 15
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdeAtendida",
      "label": "QtdeAtendida",
      "name": "QtdeAtendida",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ConversaoMedida",
      "label": "ConversaoMedida",
      "name": "ConversaoMedida",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Correcao",
      "label": "Correcao",
      "name": "Correcao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDesconto",
      "label": "PercDesconto",
      "name": "PercDesconto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlLiquido",
      "label": "VlLiquido",
      "name": "VlLiquido",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlCusto",
      "label": "VlCusto",
      "name": "VlCusto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseSub",
      "label": "BaseSub",
      "name": "BaseSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgKit",
      "label": "FgKit",
      "name": "FgKit",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPeso",
      "label": "FgPeso",
      "name": "FgPeso",
      "type": "string",
      "size": 1
    },
    {
      "field": "ImprimeComponentes",
      "label": "ImprimeComponentes",
      "name": "ImprimeComponentes",
      "type": "string",
      "size": 1
    },
    {
      "field": "Irrf",
      "label": "Irrf",
      "name": "Irrf",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "MargemSub",
      "label": "MargemSub",
      "name": "MargemSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Peso",
      "label": "Peso",
      "name": "Peso",
      "type": "string",
      "size": 10
    },
    {
      "field": "PesoBruto",
      "label": "PesoBruto",
      "name": "PesoBruto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PesoLiq",
      "label": "PesoLiq",
      "name": "PesoLiq",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ReducaoICMS",
      "label": "ReducaoICMS",
      "name": "ReducaoICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TaxaFCA",
      "label": "TaxaFCA",
      "name": "TaxaFCA",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlComissaoPrazo",
      "label": "VlComissaoPrazo",
      "name": "VlComissaoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlComissaoVista",
      "label": "VlComissaoVista",
      "name": "VlComissaoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdVendedorExtra",
      "label": "CdVendedorExtra",
      "name": "CdVendedorExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComisVista",
      "label": "PercComisVista",
      "name": "PercComisVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComisPrazo",
      "label": "PercComisPrazo",
      "name": "PercComisPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReducaoComissao",
      "label": "PercReducaoComissao",
      "name": "PercReducaoComissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMS",
      "label": "VlICMS",
      "name": "VlICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIcmsSub",
      "label": "VlIcmsSub",
      "name": "VlIcmsSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIPI",
      "label": "VlIPI",
      "name": "VlIPI",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlISS",
      "label": "VlISS",
      "name": "VlISS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CustoMedio",
      "label": "CustoMedio",
      "name": "CustoMedio",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ComplementoDescricao",
      "label": "ComplementoDescricao",
      "name": "ComplementoDescricao",
      "type": "string",
      "size": 20
    },
    {
      "field": "FgEtiqueta",
      "label": "FgEtiqueta",
      "name": "FgEtiqueta",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercLimiteComissao",
      "label": "PercLimiteComissao",
      "name": "PercLimiteComissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ComplementoDesc",
      "label": "ComplementoDesc",
      "name": "ComplementoDesc",
      "type": "string",
      "size": 15
    },
    {
      "field": "BaseCalculoIPI",
      "label": "BaseCalculoIPI",
      "name": "BaseCalculoIPI",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumEtiqKanBan",
      "label": "NumEtiqKanBan",
      "name": "NumEtiqKanBan",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumOrdemCompra",
      "label": "NumOrdemCompra",
      "name": "NumOrdemCompra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlComissaoVistaExtra",
      "label": "VlComissaoVistaExtra",
      "name": "VlComissaoVistaExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlComissaoPrazoExtra",
      "label": "VlComissaoPrazoExtra",
      "name": "VlComissaoPrazoExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 3
    },
    {
      "field": "VlImpostoDiferido",
      "label": "VlImpostoDiferido",
      "name": "VlImpostoDiferido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Fg6142",
      "label": "Fg6142",
      "name": "Fg6142",
      "type": "string",
      "size": 1
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 4
    },
    {
      "field": "NopFiscalItem",
      "label": "NopFiscalItem",
      "name": "NopFiscalItem",
      "type": "int",
      "size": 4
    },
    {
      "field": "fgBuscaDCB",
      "label": "fgBuscaDCB",
      "name": "fgBuscaDCB",
      "type": "string",
      "size": 10
    },
    {
      "field": "VlPrecoAnvisa",
      "label": "VlPrecoAnvisa",
      "name": "VlPrecoAnvisa",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "AliqRedBaseST",
      "label": "AliqRedBaseST",
      "name": "AliqRedBaseST",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescComplementarProd",
      "label": "DescComplementarProd",
      "name": "DescComplementarProd",
      "type": "string",
      "size": 1024
    },
    {
      "field": "VlVendaOriginal",
      "label": "VlVendaOriginal",
      "name": "VlVendaOriginal",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "SituacaoTributariaIPI",
      "label": "SituacaoTributariaIPI",
      "name": "SituacaoTributariaIPI",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdEnquadramentoIPI",
      "label": "CdEnquadramentoIPI",
      "name": "CdEnquadramentoIPI",
      "type": "string",
      "size": 3
    },
    {
      "field": "AliquotaIPI",
      "label": "AliquotaIPI",
      "name": "AliquotaIPI",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaPIS",
      "label": "AliquotaPIS",
      "name": "AliquotaPIS",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "AliquotaCOFINS",
      "label": "AliquotaCOFINS",
      "name": "AliquotaCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCOFINS",
      "label": "VlCOFINS",
      "name": "VlCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SituacaoTributariaCOFINS",
      "label": "SituacaoTributariaCOFINS",
      "name": "SituacaoTributariaCOFINS",
      "type": "int",
      "size": 2
    },
    {
      "field": "BaseCalculoCOFINS",
      "label": "BaseCalculoCOFINS",
      "name": "BaseCalculoCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SituacaoTributariaPIS",
      "label": "SituacaoTributariaPIS",
      "name": "SituacaoTributariaPIS",
      "type": "int",
      "size": 2
    },
    {
      "field": "BaseCalculoPIS",
      "label": "BaseCalculoPIS",
      "name": "BaseCalculoPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseCalculoICMS",
      "label": "BaseCalculoICMS",
      "name": "BaseCalculoICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SituacaoTributariaICMS",
      "label": "SituacaoTributariaICMS",
      "name": "SituacaoTributariaICMS",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgICMSDiferimentoTotal",
      "label": "FgICMSDiferimentoTotal",
      "name": "FgICMSDiferimentoTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdBaseCalculoCreditoPISCOFINS",
      "label": "CdBaseCalculoCreditoPISCOFINS",
      "name": "CdBaseCalculoCreditoPISCOFINS",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdTipoCreditoPISCOFINS",
      "label": "CdTipoCreditoPISCOFINS",
      "name": "CdTipoCreditoPISCOFINS",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdContribuicaoApuradaPISCOFINS",
      "label": "CdContribuicaoApuradaPISCOFINS",
      "name": "CdContribuicaoApuradaPISCOFINS",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "VlAproximadoImpostoItem",
      "label": "VlAproximadoImpostoItem",
      "name": "VlAproximadoImpostoItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlFreteItem",
      "label": "VlFreteItem",
      "name": "VlFreteItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlSeguroItem",
      "label": "VlSeguroItem",
      "name": "VlSeguroItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDespesaAcessoriaItem",
      "label": "VlDespesaAcessoriaItem",
      "name": "VlDespesaAcessoriaItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDescontoGerente",
      "label": "VlDescontoGerente",
      "name": "VlDescontoGerente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgConsideraItemNfe",
      "label": "FgConsideraItemNfe",
      "name": "FgConsideraItemNfe",
      "type": "string",
      "size": 1
    },
    {
      "field": "OrigemMercadoria",
      "label": "OrigemMercadoria",
      "name": "OrigemMercadoria",
      "type": "int",
      "size": 2
    },
    {
      "field": "PercentualMVA",
      "label": "PercentualMVA",
      "name": "PercentualMVA",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReducaoBaseSub",
      "label": "PercReducaoBaseSub",
      "name": "PercReducaoBaseSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercICMSSub",
      "label": "PercICMSSub",
      "name": "PercICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "UFSub",
      "label": "UFSub",
      "name": "UFSub",
      "type": "string",
      "size": 2
    },
    {
      "field": "VlBaseCalculoICMSRetido",
      "label": "VlBaseCalculoICMSRetido",
      "name": "VlBaseCalculoICMSRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSRetido",
      "label": "VlICMSRetido",
      "name": "VlICMSRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoICMSDest",
      "label": "VlBaseCalculoICMSDest",
      "name": "VlBaseCalculoICMSDest",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSDest",
      "label": "VlICMSDest",
      "name": "VlICMSDest",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercBaseOperacaoPropria",
      "label": "PercBaseOperacaoPropria",
      "name": "PercBaseOperacaoPropria",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaCreditoSimples",
      "label": "AliquotaCreditoSimples",
      "name": "AliquotaCreditoSimples",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCreditoSimples",
      "label": "VlCreditoSimples",
      "name": "VlCreditoSimples",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ModalidadeBaseICMS",
      "label": "ModalidadeBaseICMS",
      "name": "ModalidadeBaseICMS",
      "type": "int",
      "size": 2
    },
    {
      "field": "ModalidadeBaseSub",
      "label": "ModalidadeBaseSub",
      "name": "ModalidadeBaseSub",
      "type": "int",
      "size": 2
    },
    {
      "field": "MotivoDesoneracaoICMS",
      "label": "MotivoDesoneracaoICMS",
      "name": "MotivoDesoneracaoICMS",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgEmprestimo",
      "label": "FgEmprestimo",
      "name": "FgEmprestimo",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercDiferimento",
      "label": "PercDiferimento",
      "name": "PercDiferimento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QuantidadeLitros",
      "label": "QuantidadeLitros",
      "name": "QuantidadeLitros",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIPILitro",
      "label": "VlIPILitro",
      "name": "VlIPILitro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPISLitro",
      "label": "VlPISLitro",
      "name": "VlPISLitro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCOFINSLitro",
      "label": "VlCOFINSLitro",
      "name": "VlCOFINSLitro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoFederal",
      "label": "VlAproximadoImpostoFederal",
      "name": "VlAproximadoImpostoFederal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoEstadual",
      "label": "VlAproximadoImpostoEstadual",
      "name": "VlAproximadoImpostoEstadual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoMunicipal",
      "label": "VlAproximadoImpostoMunicipal",
      "name": "VlAproximadoImpostoMunicipal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PlanoContaSped",
      "label": "PlanoContaSped",
      "name": "PlanoContaSped",
      "type": "int",
      "size": 9
    },
    {
      "field": "PercFCP",
      "label": "PercFCP",
      "name": "PercFCP",
      "type": "int",
      "size": 5,
      "scale": 2
    },
    {
      "field": "VlBaseFCP",
      "label": "VlBaseFCP",
      "name": "VlBaseFCP",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlFCP",
      "label": "VlFCP",
      "name": "VlFCP",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercFCPST",
      "label": "PercFCPST",
      "name": "PercFCPST",
      "type": "int",
      "size": 5,
      "scale": 2
    },
    {
      "field": "VlBaseFCPST",
      "label": "VlBaseFCPST",
      "name": "VlBaseFCPST",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlFCPST",
      "label": "VlFCPST",
      "name": "VlFCPST",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoSTRetido",
      "label": "VlBaseCalculoSTRetido",
      "name": "VlBaseCalculoSTRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSSTRetido",
      "label": "VlICMSSTRetido",
      "name": "VlICMSSTRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaSTRetido",
      "label": "AliquotaSTRetido",
      "name": "AliquotaSTRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSSubstituto",
      "label": "VlICMSSubstituto",
      "name": "VlICMSSubstituto",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
