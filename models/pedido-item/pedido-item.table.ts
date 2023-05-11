import { TTableDef } from "@/types";

export const pedido_item: TTableDef = {
  database: "plano",
  table: "ItemPedido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      primaryKey: true,
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "produto_id",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "pedido_id",
      primaryKey: true,
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtPrevEntrega",
      label: "DtPrevEntrega",
      name: "DtPrevEntrega",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",
    },
    {
      field: "CdKit",
      label: "CdKit",
      name: "CdKit",
      typeField: "string",
    },
    {
      field: "Qtde",
      label: "Qtde",
      name: "Qtde",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ConversaoMedida",
      label: "ConversaoMedida",
      name: "ConversaoMedida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgPeso",
      label: "FgPeso",
      name: "FgPeso",
      typeField: "string",
    },
    {
      field: "ICMS",
      label: "ICMS",
      name: "ICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ImprimeComponentes",
      label: "ImprimeComponentes",
      name: "ImprimeComponentes",
      typeField: "string",
    },
    {
      field: "Peso",
      label: "Peso",
      name: "Peso",
      typeField: "string",
    },
    {
      field: "SelecProd",
      label: "SelecProd",
      name: "SelecProd",
      typeField: "string",
    },
    {
      field: "VlDescontoFechamento",
      label: "VlDescontoFechamento",
      name: "VlDescontoFechamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "int",

      scale: 10,
    },
    {
      field: "PercDesconto",
      label: "PercDesconto",
      name: "PercDesconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "int",

      scale: 10,
    },
    {
      field: "IPI",
      label: "IPI",
      name: "IPI",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CustoFinanc",
      label: "CustoFinanc",
      name: "CustoFinanc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeAtendida",
      label: "QtdeAtendida",
      name: "QtdeAtendida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdAcumuladorParcial",
      label: "CdAcumuladorParcial",
      name: "CdAcumuladorParcial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ComplementoDescricao",
      label: "ComplementoDescricao",
      name: "ComplementoDescricao",
      typeField: "string",
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
    },
    {
      field: "PercLimiteComissao",
      label: "PercLimiteComissao",
      name: "PercLimiteComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",
    },
    {
      field: "VlVistaUnit",
      label: "VlVistaUnit",
      name: "VlVistaUnit",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlPrazoUnit",
      label: "VlPrazoUnit",
      name: "VlPrazoUnit",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlFidelidadeUnit",
      label: "VlFidelidadeUnit",
      name: "VlFidelidadeUnit",
      typeField: "int",

      scale: 10,
    },
    {
      field: "QtdeFormula",
      label: "QtdeFormula",
      name: "QtdeFormula",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescricaoAlterada",
      label: "DescricaoAlterada",
      name: "DescricaoAlterada",
      typeField: "string",
    },
    {
      field: "StatusTRN",
      label: "StatusTRN",
      name: "StatusTRN",
      typeField: "int",
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgImprimeObs",
      label: "FgImprimeObs",
      name: "FgImprimeObs",
      typeField: "string",
    },
    {
      field: "DtReceita",
      label: "DtReceita",
      name: "DtReceita",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TributacaoICMS",
      label: "TributacaoICMS",
      name: "TributacaoICMS",
      typeField: "int",
    },
    {
      field: "NumPedidoEmitente",
      label: "NumPedidoEmitente",
      name: "NumPedidoEmitente",
      typeField: "string",
    },
    {
      field: "CdProjeto",
      label: "CdProjeto",
      name: "CdProjeto",
      typeField: "int",
    },
    {
      field: "fgBuscaDCB",
      label: "fgBuscaDCB",
      name: "fgBuscaDCB",
      typeField: "string",
    },
    {
      field: "PrazoEntregaItem",
      label: "PrazoEntregaItem",
      name: "PrazoEntregaItem",
      typeField: "string",
    },
    {
      field: "VlVendaOriginal",
      label: "VlVendaOriginal",
      name: "VlVendaOriginal",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlAcrescimo",
      label: "VlAcrescimo",
      name: "VlAcrescimo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgSituacaoItem",
      label: "FgSituacaoItem",
      name: "FgSituacaoItem",
      typeField: "string",
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgPreVenda",
      label: "FgPreVenda",
      name: "FgPreVenda",
      typeField: "string",
    },
    {
      field: "ControleNum",
      label: "ControleNum",
      name: "ControleNum",
      typeField: "int",
    },
    {
      field: "ControleSeq",
      label: "ControleSeq",
      name: "ControleSeq",
      typeField: "int",
    },
    {
      field: "SituacaoTributaria",
      label: "SituacaoTributaria",
      name: "SituacaoTributaria",
      typeField: "string",
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "int",

      scale: 2,
    },
    {
      field: "DescricaoProduto",
      label: "DescricaoProduto",
      name: "DescricaoProduto",
      typeField: "string",
    },
    {
      field: "PercDescontoOriginal",
      label: "PercDescontoOriginal",
      name: "PercDescontoOriginal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaICMSST",
      label: "AliquotaICMSST",
      name: "AliquotaICMSST",
      typeField: "int",

      scale: 2,
    },
    {
      field: "CdSetorEntrega",
      label: "CdSetorEntrega",
      name: "CdSetorEntrega",
      typeField: "int",
    },
    {
      field: "VlPesoBruto",
      label: "VlPesoBruto",
      name: "VlPesoBruto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdStatus",
      label: "CdStatus",
      name: "CdStatus",
      typeField: "int",
    },
    {
      field: "VlAcrescimoProduto",
      label: "VlAcrescimoProduto",
      name: "VlAcrescimoProduto",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlUnitarioNovo",
      label: "VlUnitarioNovo",
      name: "VlUnitarioNovo",
      typeField: "float",

      scale: 4,
    },
  ],
};
