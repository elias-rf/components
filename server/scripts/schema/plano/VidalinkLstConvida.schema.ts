import { TEntity } from "@er/types/*";

export const VidalinkLstConvida: TEntity =
  {
  "database": "plano",
  "table": "VidalinkLstConvida",
  "fields": [
    {
      "field": "Id",
      "label": "Id",
      "name": "Id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "allowNull": false
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
      "field": "Texto",
      "label": "Texto",
      "name": "Texto",
      "type": "string",
      "size": 5040
    }
  ]
}
