import { TEntity } from "@er/types/*";

export const ProducaoFormula: TEntity =
  {
  "database": "plano",
  "table": "ProducaoFormula",
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
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "LoteEsterilizacao",
      "label": "LoteEsterilizacao",
      "name": "LoteEsterilizacao",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "LoteFabricante",
      "label": "LoteFabricante",
      "name": "LoteFabricante",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "QuantidadeOriginal",
      "label": "QuantidadeOriginal",
      "name": "QuantidadeOriginal",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "IndiceRefracao20",
      "label": "IndiceRefracao20",
      "name": "IndiceRefracao20",
      "type": "int",
      "size": 5,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "IndiceRefracao35",
      "label": "IndiceRefracao35",
      "name": "IndiceRefracao35",
      "type": "int",
      "size": 5,
      "scale": 4,
      "allowNull": false
    }
  ]
}
