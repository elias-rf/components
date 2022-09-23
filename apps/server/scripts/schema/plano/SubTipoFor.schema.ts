import { TEntity } from "@er/types/*";

export const SubTipoFor: TEntity =
  {
  "database": "plano",
  "table": "SubTipoFor",
  "fields": [
    {
      "field": "CdSubTipo",
      "label": "CdSubTipo",
      "name": "SubTipoFor_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmSubTipo",
      "label": "NmSubTipo",
      "name": "NmSubTipo",
      "type": "string",
      "size": 40
    }
  ]
}