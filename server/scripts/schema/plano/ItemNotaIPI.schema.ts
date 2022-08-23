import { TEntity } from "@er/types/*";

export const ItemNotaIPI: TEntity =
  {
  "database": "plano",
  "table": "ItemNotaIPI",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdEnquadramentoIPI",
      "label": "CdEnquadramentoIPI",
      "name": "CdEnquadramentoIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "ClasseEnquadramentoIPI",
      "label": "ClasseEnquadramentoIPI",
      "name": "ClasseEnquadramentoIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "CdSeloIPI",
      "label": "CdSeloIPI",
      "name": "CdSeloIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "QtdeSelo",
      "label": "QtdeSelo",
      "name": "QtdeSelo",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}
