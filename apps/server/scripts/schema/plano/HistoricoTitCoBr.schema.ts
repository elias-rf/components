import { TEntity } from "@er/types/*";

export const HistoricoTitCoBr: TEntity =
  {
  "database": "plano",
  "table": "HistoricoTitCoBr",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3
    },
    {
      "field": "SiglaDoc",
      "label": "SiglaDoc",
      "name": "SiglaDoc",
      "type": "string",
      "size": 3
    },
    {
      "field": "ItemDoc",
      "label": "ItemDoc",
      "name": "ItemDoc",
      "type": "int",
      "size": 4
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "usuario",
      "label": "usuario",
      "name": "usuario",
      "type": "string",
      "size": 10
    },
    {
      "field": "Historico",
      "label": "Historico",
      "name": "Historico",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3
    }
  ]
}
