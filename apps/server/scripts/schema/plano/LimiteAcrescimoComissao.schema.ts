import { TEntity } from "@er/types/*";

export const LimiteAcrescimoComissao: TEntity =
  {
  "database": "plano",
  "table": "LimiteAcrescimoComissao",
  "fields": [
    {
      "field": "PercLimite",
      "label": "PercLimite",
      "name": "LimiteAcrescimoComissao_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "PercAcrescimo",
      "label": "PercAcrescimo",
      "name": "PercAcrescimo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
