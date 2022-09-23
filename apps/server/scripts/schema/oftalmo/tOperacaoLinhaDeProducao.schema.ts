import { TEntity } from "@er/types/*";

export const tOperacaoLinhaDeProducao: TEntity =
  {
  "database": "oftalmo",
  "table": "tOperacaoLinhaDeProducao",
  "fields": [
    {
      "field": "kOperacaoLP",
      "label": "kOperacaoLP",
      "name": "tOperacaoLinhaDeProducao_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkLinhaDeProducao",
      "label": "fkLinhaDeProducao",
      "name": "fkLinhaDeProducao",
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
      "field": "Condicional",
      "label": "Condicional",
      "name": "Condicional",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "NextOLP",
      "label": "NextOLP",
      "name": "NextOLP",
      "type": "int",
      "size": 4
    },
    {
      "field": "NextOLPRet",
      "label": "NextOLPRet",
      "name": "NextOLPRet",
      "type": "int",
      "size": 4
    },
    {
      "field": "Ordem",
      "label": "Ordem",
      "name": "Ordem",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "MarcoA",
      "label": "MarcoA",
      "name": "MarcoA",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "CheckOrdem",
      "label": "CheckOrdem",
      "name": "CheckOrdem",
      "type": "string",
      "size": 10
    },
    {
      "field": "CheckOrdemRet",
      "label": "CheckOrdemRet",
      "name": "CheckOrdemRet",
      "type": "int",
      "size": 4
    },
    {
      "field": "CheckOrdemIsNotNeedClosed",
      "label": "CheckOrdemIsNotNeedClosed",
      "name": "CheckOrdemIsNotNeedClosed",
      "type": "int",
      "size": 1
    },
    {
      "field": "CheckQtd",
      "label": "CheckQtd",
      "name": "CheckQtd",
      "type": "int",
      "size": 4
    },
    {
      "field": "CheckQtdRet",
      "label": "CheckQtdRet",
      "name": "CheckQtdRet",
      "type": "int",
      "size": 4
    },
    {
      "field": "CheckAmostragem",
      "label": "CheckAmostragem",
      "name": "CheckAmostragem",
      "type": "int",
      "size": 4
    }
  ]
}