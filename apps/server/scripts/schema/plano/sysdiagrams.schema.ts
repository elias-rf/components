import { TEntity } from "@er/types/*";

export const sysdiagrams: TEntity =
  {
  "database": "plano",
  "table": "sysdiagrams",
  "fields": [
    {
      "field": "name",
      "label": "name",
      "name": "name",
      "type": "sysname",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "principal_id",
      "label": "principal_id",
      "name": "principal_id",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "diagram_id",
      "label": "diagram_id",
      "name": "sysdiagrams_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "version",
      "label": "version",
      "name": "version",
      "type": "int",
      "size": 4
    },
    {
      "field": "definition",
      "label": "definition",
      "name": "definition",
      "type": "varbinary",
      "size": -1
    }
  ]
}
