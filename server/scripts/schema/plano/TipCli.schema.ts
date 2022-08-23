import { TEntity } from "@er/types/*";

export const TipCli: TEntity =
  {
  "database": "plano",
  "table": "TipCli",
  "fields": [
    {
      "field": "CdTipo",
      "label": "CdTipo",
      "name": "TipCli_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmTipo",
      "label": "NmTipo",
      "name": "NmTipo",
      "type": "string",
      "size": 30
    },
    {
      "field": "NumVias",
      "label": "NumVias",
      "name": "NumVias",
      "type": "int",
      "size": 2
    },
    {
      "field": "dsObservacao",
      "label": "dsObservacao",
      "name": "dsObservacao",
      "type": "string",
      "size": 300
    }
  ]
}
