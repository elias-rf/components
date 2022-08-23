import { TEntity } from "@er/types/*";

export const dtproperties: TEntity =
  {
  "database": "oftalmo",
  "table": "dtproperties",
  "fields": [
    {
      "field": "id",
      "label": "id",
      "name": "id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "allowNull": false
    },
    {
      "field": "objectid",
      "label": "objectid",
      "name": "objectid",
      "type": "int",
      "size": 4
    },
    {
      "field": "property",
      "label": "property",
      "name": "property",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "value",
      "label": "value",
      "name": "value",
      "type": "string",
      "size": 255
    },
    {
      "field": "lvalue",
      "label": "lvalue",
      "name": "lvalue",
      "type": "image",
      "size": 16
    },
    {
      "field": "version",
      "label": "version",
      "name": "version",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "uvalue",
      "label": "uvalue",
      "name": "uvalue",
      "type": "nvarchar",
      "size": 255
    }
  ]
}
