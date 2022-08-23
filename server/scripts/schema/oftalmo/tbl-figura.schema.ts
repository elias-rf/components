import { TEntity } from "@er/types/*";

export const tbl_figura: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_figura",
  "fields": [
    {
      "field": "KFigura",
      "label": "KFigura",
      "name": "tbl_figura_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Figura",
      "label": "Figura",
      "name": "Figura",
      "type": "image",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "TipoFigura",
      "label": "TipoFigura",
      "name": "TipoFigura",
      "type": "int",
      "size": 1,
      "allowNull": false
    }
  ]
}
