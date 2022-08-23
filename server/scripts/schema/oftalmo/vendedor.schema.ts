import { TEntity } from "@er/types/*";

export const vendedor: TEntity =
  {
  "database": "oftalmo",
  "table": "vendedor",
  "fields": [
    {
      "field": "id",
      "label": "id",
      "name": "id",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "uf",
      "label": "uf",
      "name": "uf",
      "type": "string",
      "size": 200
    },
    {
      "field": "meta",
      "label": "meta",
      "name": "meta",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
