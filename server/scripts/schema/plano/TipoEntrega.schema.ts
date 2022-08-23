import { TEntity } from "@er/types/*";

export const TipoEntrega: TEntity =
  {
  "database": "plano",
  "table": "TipoEntrega",
  "fields": [
    {
      "field": "Codigo",
      "label": "Codigo",
      "name": "TipoEntrega_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "VlMinimo",
      "label": "VlMinimo",
      "name": "VlMinimo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTaxaEntrega",
      "label": "VlTaxaEntrega",
      "name": "VlTaxaEntrega",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgCalculaEntrega",
      "label": "FgCalculaEntrega",
      "name": "FgCalculaEntrega",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimePedido",
      "label": "FgImprimePedido",
      "name": "FgImprimePedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "Impressora",
      "label": "Impressora",
      "name": "Impressora",
      "type": "string",
      "size": 128
    },
    {
      "field": "PercAdicional",
      "label": "PercAdicional",
      "name": "PercAdicional",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FiguraOrdemFaturamento",
      "label": "FiguraOrdemFaturamento",
      "name": "FiguraOrdemFaturamento",
      "type": "string",
      "size": 64
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    }
  ]
}
