import { TEntity } from "@er/types/*";

export const LotesOrdemProducao: TEntity =
  {
  "database": "plano",
  "table": "LotesOrdemProducao",
  "fields": [
    {
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CdLote",
      "label": "CdLote",
      "name": "CdLote",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "QtdeLote",
      "label": "QtdeLote",
      "name": "QtdeLote",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdFase",
      "label": "CdFase",
      "name": "CdFase",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtFabricacao",
      "label": "DtFabricacao",
      "name": "DtFabricacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}