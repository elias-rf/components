import { TEntity } from "@er/types/*";

export const FontePagamento: TEntity =
  {
  "database": "plano",
  "table": "FontePagamento",
  "fields": [
    {
      "field": "CdFontePagamento",
      "label": "CdFontePagamento",
      "name": "FontePagamento_id",
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
