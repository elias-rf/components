import { TEntity } from "@er/types/*";

export const tOperacaoDeProducao: TEntity =
  {
  "database": "oftalmo",
  "table": "tOperacaoDeProducao",
  "fields": [
    {
      "field": "kOperacao",
      "label": "kOperacao",
      "name": "tOperacaoDeProducao_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Operacao",
      "label": "Operacao",
      "name": "Operacao",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "EhRetrabalho",
      "label": "EhRetrabalho",
      "name": "EhRetrabalho",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Especial",
      "label": "Especial",
      "name": "Especial",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 200
    },
    {
      "field": "Amostragem",
      "label": "Amostragem",
      "name": "Amostragem",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    }
  ]
}
