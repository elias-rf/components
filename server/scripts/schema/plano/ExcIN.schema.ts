import { TEntity } from "@er/types/*";

export const ExcIN: TEntity =
  {
  "database": "plano",
  "table": "ExcIN",
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
      "size": 2,
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
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliqIcms",
      "label": "AliqIcms",
      "name": "AliqIcms",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "BaseCalculo",
      "label": "BaseCalculo",
      "name": "BaseCalculo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICms",
      "label": "VlICms",
      "name": "VlICms",
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
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1,
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
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
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
      "field": "PercDesconto",
      "label": "PercDesconto",
      "name": "PercDesconto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliqIPI",
      "label": "AliqIPI",
      "name": "AliqIPI",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "BaseSub",
      "label": "BaseSub",
      "name": "BaseSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgKit",
      "label": "FgKit",
      "name": "FgKit",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPeso",
      "label": "FgPeso",
      "name": "FgPeso",
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
      "field": "Irrf",
      "label": "Irrf",
      "name": "Irrf",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "MargemSub",
      "label": "MargemSub",
      "name": "MargemSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Peso",
      "label": "Peso",
      "name": "Peso",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "ReducaoICMS",
      "label": "ReducaoICMS",
      "name": "ReducaoICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TaxaFCA",
      "label": "TaxaFCA",
      "name": "TaxaFCA",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1,
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
      "field": "VlICMSSub",
      "label": "VlICMSSub",
      "name": "VlICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VLIPI",
      "label": "VLIPI",
      "name": "VLIPI",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VLISS",
      "label": "VLISS",
      "name": "VLISS",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    }
  ]
}
