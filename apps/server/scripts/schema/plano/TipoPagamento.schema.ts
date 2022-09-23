import { TEntity } from "@er/types/*";

export const TipoPagamento: TEntity =
  {
  "database": "plano",
  "table": "TipoPagamento",
  "fields": [
    {
      "field": "CdTipoPagamento",
      "label": "CdTipoPagamento",
      "name": "TipoPagamento_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 40,
      "allowNull": false
    }
  ]
}