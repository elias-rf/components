import { TTableDef } from "@/types/model";

export const VidaLinkItemPedido: TTableDef = {
  database: "plano",
  table: "VidaLinkItemPedido",
  fields: [
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "NumAutorizacao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtMovimento",
      label: "DtMovimento",
      name: "DtMovimento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCupomFiscal",
      label: "NumCupomFiscal",
      name: "NumCupomFiscal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CNPJConvenio",
      label: "CNPJConvenio",
      name: "CNPJConvenio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdConvenio",
      label: "CdConvenio",
      name: "CdConvenio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoVidaLink",
      label: "CdProdutoVidaLink",
      name: "CdProdutoVidaLink",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBruto",
      label: "VlBruto",
      name: "VlBruto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VLLoja",
      label: "VLLoja",
      name: "VLLoja",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlVIdaLink",
      label: "VlVIdaLink",
      name: "VlVIdaLink",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberLoja",
      label: "VlReceberLoja",
      name: "VlReceberLoja",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSubsidio",
      label: "VlSubsidio",
      name: "VlSubsidio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDebito",
      label: "VlDebito",
      name: "VlDebito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlConvenio",
      label: "VlConvenio",
      name: "VlConvenio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgTipoPagamentoConv",
      label: "FgTipoPagamentoConv",
      name: "FgTipoPagamentoConv",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlReembolso",
      label: "VlReembolso",
      name: "VlReembolso",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgTipoReembolso",
      label: "FgTipoReembolso",
      name: "FgTipoReembolso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercReposicao",
      label: "PercReposicao",
      name: "PercReposicao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComissao",
      label: "PercComissao",
      name: "PercComissao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercTaxaAdministracao",
      label: "PercTaxaAdministracao",
      name: "PercTaxaAdministracao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgListaVidalink",
      label: "FgListaVidalink",
      name: "FgListaVidalink",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtPagamento",
      label: "DtPagamento",
      name: "DtPagamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumSolicitacaoFP",
      label: "NumSolicitacaoFP",
      name: "NumSolicitacaoFP",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumAutorizacaoFP",
      label: "NumAutorizacaoFP",
      name: "NumAutorizacaoFP",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgConciliacao",
      label: "FgConciliacao",
      name: "FgConciliacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtConciliacao",
      label: "DtConciliacao",
      name: "DtConciliacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
