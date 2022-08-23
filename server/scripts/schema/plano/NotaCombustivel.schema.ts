import { TEntity } from "@er/types/*";

export const NotaCombustivel: TEntity =
  {
  "database": "plano",
  "table": "NotaCombustivel",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 5,
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
      "field": "CdANP",
      "label": "CdANP",
      "name": "CdANP",
      "type": "string",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdCODIF",
      "label": "CdCODIF",
      "name": "CdCODIF",
      "type": "string",
      "size": 21,
      "allowNull": false
    },
    {
      "field": "QtdeFatTemp",
      "label": "QtdeFatTemp",
      "name": "QtdeFatTemp",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "UFConsumo",
      "label": "UFConsumo",
      "name": "UFConsumo",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "QtdeBaseCalculoCIDE",
      "label": "QtdeBaseCalculoCIDE",
      "name": "QtdeBaseCalculoCIDE",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaCIDE",
      "label": "AliquotaCIDE",
      "name": "AliquotaCIDE",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCIDE",
      "label": "VlCIDE",
      "name": "VlCIDE",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercGasNatural",
      "label": "PercGasNatural",
      "name": "PercGasNatural",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
