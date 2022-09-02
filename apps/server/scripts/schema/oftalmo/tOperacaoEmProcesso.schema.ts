import { TEntity } from "@er/types/*";

export const tOperacaoEmProcesso: TEntity =
  {
  "database": "oftalmo",
  "table": "tOperacaoEmProcesso",
  "fields": [
    {
      "field": "kOperacaoEP",
      "label": "kOperacaoEP",
      "name": "tOperacaoEmProcesso_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkOP",
      "label": "fkOP",
      "name": "fkOP",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkOperacao",
      "label": "fkOperacao",
      "name": "fkOperacao",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}
