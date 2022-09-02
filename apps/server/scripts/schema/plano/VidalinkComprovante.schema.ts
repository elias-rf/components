import { TEntity } from "@er/types/*";

export const VidalinkComprovante: TEntity =
  {
  "database": "plano",
  "table": "VidalinkComprovante",
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
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
      "type": "int",
      "size": 4,
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
      "field": "Texto",
      "label": "Texto",
      "name": "Texto",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "NumAutorizacao",
      "label": "NumAutorizacao",
      "name": "NumAutorizacao",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
