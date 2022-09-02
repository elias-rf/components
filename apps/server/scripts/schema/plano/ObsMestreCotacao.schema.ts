import { TEntity } from "@er/types/*";

export const ObsMestreCotacao: TEntity =
  {
  "database": "plano",
  "table": "ObsMestreCotacao",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumCotacao",
      "label": "NumCotacao",
      "name": "NumCotacao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 512
    }
  ]
}
