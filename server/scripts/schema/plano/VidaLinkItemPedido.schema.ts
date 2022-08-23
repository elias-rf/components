import { TEntity } from "@er/types/*";

export const VidaLinkItemPedido: TEntity =
  {
  "database": "plano",
  "table": "VidaLinkItemPedido",
  "fields": [
    {
      "field": "NumAutorizacao",
      "label": "NumAutorizacao",
      "name": "NumAutorizacao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtMovimento",
      "label": "DtMovimento",
      "name": "DtMovimento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "NumCupomFiscal",
      "label": "NumCupomFiscal",
      "name": "NumCupomFiscal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumCOO",
      "label": "NumCOO",
      "name": "NumCOO",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CNPJConvenio",
      "label": "CNPJConvenio",
      "name": "CNPJConvenio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdConvenio",
      "label": "CdConvenio",
      "name": "CdConvenio",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "CdProdutoVidaLink",
      "label": "CdProdutoVidaLink",
      "name": "CdProdutoVidaLink",
      "type": "string",
      "size": 15,
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
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBruto",
      "label": "VlBruto",
      "name": "VlBruto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VLLoja",
      "label": "VLLoja",
      "name": "VLLoja",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlVIdaLink",
      "label": "VlVIdaLink",
      "name": "VlVIdaLink",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlReceberLoja",
      "label": "VlReceberLoja",
      "name": "VlReceberLoja",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlSubsidio",
      "label": "VlSubsidio",
      "name": "VlSubsidio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDebito",
      "label": "VlDebito",
      "name": "VlDebito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlConvenio",
      "label": "VlConvenio",
      "name": "VlConvenio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgTipoPagamentoConv",
      "label": "FgTipoPagamentoConv",
      "name": "FgTipoPagamentoConv",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlReembolso",
      "label": "VlReembolso",
      "name": "VlReembolso",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgTipoReembolso",
      "label": "FgTipoReembolso",
      "name": "FgTipoReembolso",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "PercReposicao",
      "label": "PercReposicao",
      "name": "PercReposicao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercComissao",
      "label": "PercComissao",
      "name": "PercComissao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercTaxaAdministracao",
      "label": "PercTaxaAdministracao",
      "name": "PercTaxaAdministracao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgListaVidalink",
      "label": "FgListaVidalink",
      "name": "FgListaVidalink",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtPagamento",
      "label": "DtPagamento",
      "name": "DtPagamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumSolicitacaoFP",
      "label": "NumSolicitacaoFP",
      "name": "NumSolicitacaoFP",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumAutorizacaoFP",
      "label": "NumAutorizacaoFP",
      "name": "NumAutorizacaoFP",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgConciliacao",
      "label": "FgConciliacao",
      "name": "FgConciliacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtConciliacao",
      "label": "DtConciliacao",
      "name": "DtConciliacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
