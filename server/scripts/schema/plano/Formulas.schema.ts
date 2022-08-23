import { TEntity } from "@er/types/*";

export const Formulas: TEntity =
  {
  "database": "plano",
  "table": "Formulas",
  "fields": [
    {
      "field": "Origem",
      "label": "Origem",
      "name": "Origem",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Destino",
      "label": "Destino",
      "name": "Destino",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Formula",
      "label": "Formula",
      "name": "Formula",
      "type": "string",
      "size": 50
    }
  ]
}
