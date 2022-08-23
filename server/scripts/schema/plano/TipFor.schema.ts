import { TEntity } from "@er/types/*";

export const TipFor: TEntity =
  {
  "database": "plano",
  "table": "TipFor",
  "fields": [
    {
      "field": "CdTipo",
      "label": "CdTipo",
      "name": "TipFor_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmTipo",
      "label": "NmTipo",
      "name": "NmTipo",
      "type": "string",
      "size": 40
    }
  ]
}
