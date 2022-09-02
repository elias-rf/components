import { TEntity } from "@er/types/*";

export const ProducaoEtiquetaExterna: TEntity =
  {
  "database": "plano",
  "table": "ProducaoEtiquetaExterna",
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumControle",
      "label": "NumControle",
      "name": "NumControle",
      "type": "int",
      "size": 9
    },
    {
      "field": "FgAtualizacao",
      "label": "FgAtualizacao",
      "name": "FgAtualizacao",
      "type": "string",
      "size": 1
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
