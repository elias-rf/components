import { TEntity } from "@er/types/*";

export const Tamanhos: TEntity =
  {
  "database": "plano",
  "table": "Tamanhos",
  "fields": [
    {
      "field": "CdTamanho",
      "label": "CdTamanho",
      "name": "Tamanhos_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 20
    }
  ]
}