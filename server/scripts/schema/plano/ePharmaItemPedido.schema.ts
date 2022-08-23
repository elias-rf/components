import { TEntity } from "@er/types/*";

export const ePharmaItemPedido: TEntity =
  {
  "database": "plano",
  "table": "ePharmaItemPedido",
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
      "field": "CdProdutoePharma",
      "label": "CdProdutoePharma",
      "name": "CdProdutoePharma",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "VlLoja",
      "label": "VlLoja",
      "name": "VlLoja",
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
      "field": "VlePharma",
      "label": "VlePharma",
      "name": "VlePharma",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAquisicao",
      "label": "VlAquisicao",
      "name": "VlAquisicao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlRepasse",
      "label": "VlRepasse",
      "name": "VlRepasse",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgMenorPreco",
      "label": "FgMenorPreco",
      "name": "FgMenorPreco",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CdCategoria",
      "label": "CdCategoria",
      "name": "CdCategoria",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "FgConciliacao",
      "label": "FgConciliacao",
      "name": "FgConciliacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
