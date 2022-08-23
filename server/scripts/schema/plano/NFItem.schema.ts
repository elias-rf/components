import { TEntity } from "@er/types/*";

export const NFItem: TEntity =
  {
  "database": "plano",
  "table": "NFItem",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NroNF",
      "label": "NroNF",
      "name": "NroNF",
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
      "size": 16,
      "allowNull": false
    },
    {
      "field": "FgCusto",
      "label": "FgCusto",
      "name": "FgCusto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEtiqueta",
      "label": "FgEtiqueta",
      "name": "FgEtiqueta",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercICMS",
      "label": "PercICMS",
      "name": "PercICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercIPI",
      "label": "PercIPI",
      "name": "PercIPI",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlAcrescItem",
      "label": "VlAcrescItem",
      "name": "VlAcrescItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDescItem",
      "label": "VlDescItem",
      "name": "VlDescItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlrICMS",
      "label": "VlrICMS",
      "name": "VlrICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlrIPI",
      "label": "VlrIPI",
      "name": "VlrIPI",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlTotItem",
      "label": "VlTotItem",
      "name": "VlTotItem",
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
      "field": "TipoTributacao",
      "label": "TipoTributacao",
      "name": "TipoTributacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlBaseSub",
      "label": "VlBaseSub",
      "name": "VlBaseSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSSub",
      "label": "VlICMSSub",
      "name": "VlICMSSub",
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
      "field": "DtEntr",
      "label": "DtEntr",
      "name": "DtEntr",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlRepasseICMSItem",
      "label": "VlRepasseICMSItem",
      "name": "VlRepasseICMSItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgICMSJaRecolhido",
      "label": "FgICMSJaRecolhido",
      "name": "FgICMSJaRecolhido",
      "type": "string",
      "size": 1
    },
    {
      "field": "PrecPMC",
      "label": "PrecPMC",
      "name": "PrecPMC",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlRelacionado",
      "label": "VlRelacionado",
      "name": "VlRelacionado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgCompoeBaseSub",
      "label": "FgCompoeBaseSub",
      "name": "FgCompoeBaseSub",
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
      "field": "NopfiscalItem",
      "label": "NopfiscalItem",
      "name": "NopfiscalItem",
      "type": "int",
      "size": 4
    },
    {
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBrutoUnitario",
      "label": "VlBrutoUnitario",
      "name": "VlBrutoUnitario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlLiquidoUnitario",
      "label": "VlLiquidoUnitario",
      "name": "VlLiquidoUnitario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoCreditoICMS",
      "label": "VlBaseCalculoCreditoICMS",
      "name": "VlBaseCalculoCreditoICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCreditoICMS",
      "label": "VlCreditoICMS",
      "name": "VlCreditoICMS",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "VlICMSSubRecolherGNRE",
      "label": "VlICMSSubRecolherGNRE",
      "name": "VlICMSSubRecolherGNRE",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReducaoICMS",
      "label": "PercReducaoICMS",
      "name": "PercReducaoICMS",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "VlBaseCalculoIPI",
      "label": "VlBaseCalculoIPI",
      "name": "VlBaseCalculoIPI",
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
      "field": "SituacaoTributariaIPI",
      "label": "SituacaoTributariaIPI",
      "name": "SituacaoTributariaIPI",
      "type": "int",
      "size": 2
    },
    {
      "field": "OrigemMercadoria",
      "label": "OrigemMercadoria",
      "name": "OrigemMercadoria",
      "type": "int",
      "size": 2
    },
    {
      "field": "SituacaoTributariaPIS",
      "label": "SituacaoTributariaPIS",
      "name": "SituacaoTributariaPIS",
      "type": "int",
      "size": 2
    },
    {
      "field": "SituacaoTributariaCofins",
      "label": "SituacaoTributariaCofins",
      "name": "SituacaoTributariaCofins",
      "type": "int",
      "size": 2
    },
    {
      "field": "VlBaseCalculoPIS",
      "label": "VlBaseCalculoPIS",
      "name": "VlBaseCalculoPIS",
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
      "field": "QtdePIS",
      "label": "QtdePIS",
      "name": "QtdePIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPISSub",
      "label": "VlPISSub",
      "name": "VlPISSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoCofins",
      "label": "VlBaseCalculoCofins",
      "name": "VlBaseCalculoCofins",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaCofins",
      "label": "AliquotaCofins",
      "name": "AliquotaCofins",
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
      "field": "QtdeCofins",
      "label": "QtdeCofins",
      "name": "QtdeCofins",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCofinsSub",
      "label": "VlCofinsSub",
      "name": "VlCofinsSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseICMSManual",
      "label": "VlBaseICMSManual",
      "name": "VlBaseICMSManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlICMSManual",
      "label": "VlICMSManual",
      "name": "VlICMSManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlBaseIPIManual",
      "label": "VlBaseIPIManual",
      "name": "VlBaseIPIManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlIPIManual",
      "label": "VlIPIManual",
      "name": "VlIPIManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlBasePISManual",
      "label": "VlBasePISManual",
      "name": "VlBasePISManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlPISManual",
      "label": "VlPISManual",
      "name": "VlPISManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlBaseCofinsManual",
      "label": "VlBaseCofinsManual",
      "name": "VlBaseCofinsManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlCofinsManual",
      "label": "VlCofinsManual",
      "name": "VlCofinsManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConferido",
      "label": "FgConferido",
      "name": "FgConferido",
      "type": "string",
      "size": 1
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
      "field": "VlDespesaAcessoriaItem",
      "label": "VlDespesaAcessoriaItem",
      "name": "VlDespesaAcessoriaItem",
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
      "field": "VlBaseCalculoICMSSubRecolherGNRE",
      "label": "VlBaseCalculoICMSSubRecolherGNRE",
      "name": "VlBaseCalculoICMSSubRecolherGNRE",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgDesconsideraEstoque",
      "label": "FgDesconsideraEstoque",
      "name": "FgDesconsideraEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBonificacao",
      "label": "FgBonificacao",
      "name": "FgBonificacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlCustoUnitario",
      "label": "VlCustoUnitario",
      "name": "VlCustoUnitario",
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
      "field": "VlFCPSTItem",
      "label": "VlFCPSTItem",
      "name": "VlFCPSTItem",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
