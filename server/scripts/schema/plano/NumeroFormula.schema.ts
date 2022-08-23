import { TEntity } from "@er/types/*";

export const NumeroFormula: TEntity =
  {
  "database": "plano",
  "table": "NumeroFormula",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "NumeroFormula_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NumUltFormula",
      "label": "NumUltFormula",
      "name": "NumUltFormula",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}
