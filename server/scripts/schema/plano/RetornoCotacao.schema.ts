import { TEntity } from "@er/types/*";

export const RetornoCotacao: TEntity =
  {
  "database": "plano",
  "table": "RetornoCotacao",
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtCotacao",
      "label": "DtCotacao",
      "name": "DtCotacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "PrazoPgto",
      "label": "PrazoPgto",
      "name": "PrazoPgto",
      "type": "string",
      "size": 512
    },
    {
      "field": "PrazoEntrega",
      "label": "PrazoEntrega",
      "name": "PrazoEntrega",
      "type": "string",
      "size": 512
    }
  ]
}
