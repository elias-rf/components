import { TEntity } from "@er/types/*";

export const ExcIP: TEntity =
  {
  "database": "plano",
  "table": "ExcIP",
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
      "field": "NroPDV",
      "label": "NroPDV",
      "name": "NroPDV",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
      "type": "int",
      "size": 4,
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "CdRefEstoque",
      "label": "CdRefEstoque",
      "name": "CdRefEstoque",
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
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescGer",
      "label": "VlDescGer",
      "name": "VlDescGer",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescDir",
      "label": "VlDescDir",
      "name": "VlDescDir",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlLiquido",
      "label": "VlLiquido",
      "name": "VlLiquido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ClasFiscal",
      "label": "ClasFiscal",
      "name": "ClasFiscal",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "AliqISS",
      "label": "AliqISS",
      "name": "AliqISS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Aliquota",
      "label": "Aliquota",
      "name": "Aliquota",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlComissaoPrazo",
      "label": "VlComissaoPrazo",
      "name": "VlComissaoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlComissaoVista",
      "label": "VlComissaoVista",
      "name": "VlComissaoVista",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CustoMedio",
      "label": "CustoMedio",
      "name": "CustoMedio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "ImprimeComponentes",
      "label": "ImprimeComponentes",
      "name": "ImprimeComponentes",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "PercLimiteComissao",
      "label": "PercLimiteComissao",
      "name": "PercLimiteComissao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "ComplementoDescricao",
      "label": "ComplementoDescricao",
      "name": "ComplementoDescricao",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "VlCusto",
      "label": "VlCusto",
      "name": "VlCusto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
