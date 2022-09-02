import { TEntity } from "@er/types/*";

export const ePharmaPrescritor: TEntity =
  {
  "database": "plano",
  "table": "ePharmaPrescritor",
  "fields": [
    {
      "field": "CdTipoPrescritor",
      "label": "CdTipoPrescritor",
      "name": "ePharmaPrescritor_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DescricaoPrescritor",
      "label": "DescricaoPrescritor",
      "name": "DescricaoPrescritor",
      "type": "string",
      "size": 64,
      "allowNull": false
    }
  ]
}
