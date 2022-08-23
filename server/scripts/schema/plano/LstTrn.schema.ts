import { TEntity } from "@er/types/*";

export const LstTrn: TEntity =
  {
  "database": "plano",
  "table": "LstTrn",
  "fields": [
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
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Texto",
      "label": "Texto",
      "name": "Texto",
      "type": "string",
      "size": 1028,
      "allowNull": false
    }
  ]
}
