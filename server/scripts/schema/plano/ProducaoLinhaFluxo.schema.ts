import { TEntity } from "@er/types/*";

export const ProducaoLinhaFluxo: TEntity =
  {
  "database": "plano",
  "table": "ProducaoLinhaFluxo",
  "fields": [
    {
      "field": "CdLinhaProducao",
      "label": "CdLinhaProducao",
      "name": "CdLinhaProducao",
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
      "field": "CdOperacao",
      "label": "CdOperacao",
      "name": "CdOperacao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgCondicional",
      "label": "FgCondicional",
      "name": "FgCondicional",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAmostragem",
      "label": "FgAmostragem",
      "name": "FgAmostragem",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgRetrabalho",
      "label": "FgRetrabalho",
      "name": "FgRetrabalho",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEtiquetaInterna",
      "label": "FgEtiquetaInterna",
      "name": "FgEtiquetaInterna",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEsterilizacaoInterna",
      "label": "FgEsterilizacaoInterna",
      "name": "FgEsterilizacaoInterna",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEsterilizacaoExterna",
      "label": "FgEsterilizacaoExterna",
      "name": "FgEsterilizacaoExterna",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgContinuidade",
      "label": "FgContinuidade",
      "name": "FgContinuidade",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEtiquetaExterna",
      "label": "FgEtiquetaExterna",
      "name": "FgEtiquetaExterna",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
