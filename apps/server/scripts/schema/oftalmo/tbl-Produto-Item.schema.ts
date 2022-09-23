import { TEntity } from "@er/types/*";

export const tbl_Produto_Item: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Produto_Item",
  "fields": [
    {
      "field": "kProdutoItem",
      "label": "kProdutoItem",
      "name": "tbl_Produto_Item_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NomeProdutoItem",
      "label": "NomeProdutoItem",
      "name": "NomeProdutoItem",
      "type": "string",
      "size": 120,
      "allowNull": false
    },
    {
      "field": "fkProduto",
      "label": "fkProduto",
      "name": "fkProduto",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdMinima",
      "label": "QtdMinima",
      "name": "QtdMinima",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "QtdAtual",
      "label": "QtdAtual",
      "name": "QtdAtual",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "QtdMaxima",
      "label": "QtdMaxima",
      "name": "QtdMaxima",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "QtdSeguranca",
      "label": "QtdSeguranca",
      "name": "QtdSeguranca",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "ConsumoMedioMes",
      "label": "ConsumoMedioMes",
      "name": "ConsumoMedioMes",
      "type": "float",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "ValorVenda",
      "label": "ValorVenda",
      "name": "ValorVenda",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ValorVendaDolar",
      "label": "ValorVendaDolar",
      "name": "ValorVendaDolar",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ValorCompra",
      "label": "ValorCompra",
      "name": "ValorCompra",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "fkMoedaCompra",
      "label": "fkMoedaCompra",
      "name": "fkMoedaCompra",
      "type": "int",
      "size": 1
    },
    {
      "field": "IdVisiontech",
      "label": "IdVisiontech",
      "name": "IdVisiontech",
      "type": "string",
      "size": 6
    },
    {
      "field": "ForaDeLinha",
      "label": "ForaDeLinha",
      "name": "ForaDeLinha",
      "type": "int",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "GrupoCredito",
      "label": "GrupoCredito",
      "name": "GrupoCredito",
      "type": "string",
      "size": 20
    },
    {
      "field": "fkProdutoItemAssociado",
      "label": "fkProdutoItemAssociado",
      "name": "fkProdutoItemAssociado",
      "type": "int",
      "size": 4
    },
    {
      "field": "AvisoEstoqueMinMax",
      "label": "AvisoEstoqueMinMax",
      "name": "AvisoEstoqueMinMax",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    }
  ]
}