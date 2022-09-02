import { TEntity } from "@er/types/*";

export const ProducaoEsterilizacaoItem: TEntity =
  {
  "database": "plano",
  "table": "ProducaoEsterilizacaoItem",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumLoteEsterilizacao",
      "label": "NumLoteEsterilizacao",
      "name": "NumLoteEsterilizacao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 5,
      "allowNull": false
    }
  ]
}
