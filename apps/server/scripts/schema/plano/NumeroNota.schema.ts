import { TEntity } from "@er/types/*";

export const NumeroNota: TEntity =
  {
  "database": "plano",
  "table": "NumeroNota",
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
      "field": "NumUltNota",
      "label": "NumUltNota",
      "name": "NumUltNota",
      "type": "int",
      "size": 4
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
    }
  ]
}
