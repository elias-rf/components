import { TEntity } from "@er/types/*";

export const HistoricoTitCoBrAnterior: TEntity =
  {
  "database": "plano",
  "table": "HistoricoTitCoBrAnterior",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
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
      "field": "SiglaDoc",
      "label": "SiglaDoc",
      "name": "SiglaDoc",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ItemDoc",
      "label": "ItemDoc",
      "name": "ItemDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "Historico",
      "label": "Historico",
      "name": "Historico",
      "type": "string",
      "size": 512,
      "allowNull": false
    }
  ]
}
