import { TEntity } from "@er/types/*";

export const TextoPreventiva: TEntity =
  {
  "database": "plano",
  "table": "TextoPreventiva",
  "fields": [
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "TextoPreventiva_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Texto",
      "label": "Texto",
      "name": "Texto",
      "type": "string",
      "size": 100
    }
  ]
}