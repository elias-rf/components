import { TEntity } from "@er/types/*";

export const ItemPedido: TEntity =
  {
  "database": "plano",
  "table": "ItemPedido",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
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
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtPrevEntrega",
      "label": "DtPrevEntrega",
      "name": "DtPrevEntrega",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "CdRefEstoque",
      "label": "CdRefEstoque",
      "name": "CdRefEstoque",
      "type": "string",
      "size": 15
    },
    {
      "field": "CdKit",
      "label": "CdKit",
      "name": "CdKit",
      "type": "string",
      "size": 15
    },
    {
      "field": "Qtde",
      "label": "Qtde",
      "name": "Qtde",
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
      "field": "FgPeso",
      "label": "FgPeso",
      "name": "FgPeso",
      "type": "string",
      "size": 1
    },
    {
      "field": "ICMS",
      "label": "ICMS",
      "name": "ICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ImprimeComponentes",
      "label": "ImprimeComponentes",
      "name": "ImprimeComponentes",
      "type": "string",
      "size": 1
    },
    {
      "field": "Peso",
      "label": "Peso",
      "name": "Peso",
      "type": "string",
      "size": 10
    },
    {
      "field": "SelecProd",
      "label": "SelecProd",
      "name": "SelecProd",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlDescontoFechamento",
      "label": "VlDescontoFechamento",
      "name": "VlDescontoFechamento",
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
      "field": "PercDesconto",
      "label": "PercDesconto",
      "name": "PercDesconto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "int",
      "size": 13,
      "scale": 10
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
      "field": "IPI",
      "label": "IPI",
      "name": "IPI",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "CustoFinanc",
      "label": "CustoFinanc",
      "name": "CustoFinanc",
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
      "field": "CdAcumuladorParcial",
      "label": "CdAcumuladorParcial",
      "name": "CdAcumuladorParcial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "ComplementoDescricao",
      "label": "ComplementoDescricao",
      "name": "ComplementoDescricao",
      "type": "string",
      "size": 20
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16
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
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 4
    },
    {
      "field": "VlVistaUnit",
      "label": "VlVistaUnit",
      "name": "VlVistaUnit",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlPrazoUnit",
      "label": "VlPrazoUnit",
      "name": "VlPrazoUnit",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlFidelidadeUnit",
      "label": "VlFidelidadeUnit",
      "name": "VlFidelidadeUnit",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "QtdeFormula",
      "label": "QtdeFormula",
      "name": "QtdeFormula",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescricaoAlterada",
      "label": "DescricaoAlterada",
      "name": "DescricaoAlterada",
      "type": "string",
      "size": 100
    },
    {
      "field": "StatusTRN",
      "label": "StatusTRN",
      "name": "StatusTRN",
      "type": "int",
      "size": 2
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "FgImprimeObs",
      "label": "FgImprimeObs",
      "name": "FgImprimeObs",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtReceita",
      "label": "DtReceita",
      "name": "DtReceita",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "TributacaoICMS",
      "label": "TributacaoICMS",
      "name": "TributacaoICMS",
      "type": "int",
      "size": 2
    },
    {
      "field": "NumPedidoEmitente",
      "label": "NumPedidoEmitente",
      "name": "NumPedidoEmitente",
      "type": "string",
      "size": 20
    },
    {
      "field": "CdProjeto",
      "label": "CdProjeto",
      "name": "CdProjeto",
      "type": "int",
      "size": 2
    },
    {
      "field": "fgBuscaDCB",
      "label": "fgBuscaDCB",
      "name": "fgBuscaDCB",
      "type": "string",
      "size": 10
    },
    {
      "field": "PrazoEntregaItem",
      "label": "PrazoEntregaItem",
      "name": "PrazoEntregaItem",
      "type": "string",
      "size": 16
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
      "field": "VlAcrescimo",
      "label": "VlAcrescimo",
      "name": "VlAcrescimo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgSituacaoItem",
      "label": "FgSituacaoItem",
      "name": "FgSituacaoItem",
      "type": "string",
      "size": 1
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
      "field": "FgPreVenda",
      "label": "FgPreVenda",
      "name": "FgPreVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "ControleNum",
      "label": "ControleNum",
      "name": "ControleNum",
      "type": "int",
      "size": 9
    },
    {
      "field": "ControleSeq",
      "label": "ControleSeq",
      "name": "ControleSeq",
      "type": "int",
      "size": 2
    },
    {
      "field": "SituacaoTributaria",
      "label": "SituacaoTributaria",
      "name": "SituacaoTributaria",
      "type": "string",
      "size": 1
    },
    {
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "int",
      "size": 5,
      "scale": 2
    },
    {
      "field": "DescricaoProduto",
      "label": "DescricaoProduto",
      "name": "DescricaoProduto",
      "type": "string",
      "size": 128
    },
    {
      "field": "PercDescontoOriginal",
      "label": "PercDescontoOriginal",
      "name": "PercDescontoOriginal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaICMSST",
      "label": "AliquotaICMSST",
      "name": "AliquotaICMSST",
      "type": "int",
      "size": 5,
      "scale": 2
    },
    {
      "field": "CdSetorEntrega",
      "label": "CdSetorEntrega",
      "name": "CdSetorEntrega",
      "type": "int",
      "size": 5
    },
    {
      "field": "VlPesoBruto",
      "label": "VlPesoBruto",
      "name": "VlPesoBruto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdStatus",
      "label": "CdStatus",
      "name": "CdStatus",
      "type": "int",
      "size": 4
    },
    {
      "field": "VlAcrescimoProduto",
      "label": "VlAcrescimoProduto",
      "name": "VlAcrescimoProduto",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlUnitarioNovo",
      "label": "VlUnitarioNovo",
      "name": "VlUnitarioNovo",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
