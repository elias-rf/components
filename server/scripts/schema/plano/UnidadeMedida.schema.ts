import { TEntity } from "@er/types/*";

export const UnidadeMedida: TEntity =
  {
  "database": "plano",
  "table": "UnidadeMedida",
  "fields": [
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "UnidadeMedida_id",
      "type": "string",
      "size": 5,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DescricaoUnidade",
      "label": "DescricaoUnidade",
      "name": "DescricaoUnidade",
      "type": "string",
      "size": 20,
      "allowNull": false
    }
  ]
}
