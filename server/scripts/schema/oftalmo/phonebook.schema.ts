import { TEntity } from "@er/types/*";

export const phonebook: TEntity =
  {
  "database": "oftalmo",
  "table": "phonebook",
  "fields": [
    {
      "field": "id",
      "label": "id",
      "name": "phonebook_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "name",
      "label": "name",
      "name": "name",
      "type": "string",
      "size": 200,
      "allowNull": false
    },
    {
      "field": "department",
      "label": "department",
      "name": "department",
      "type": "string",
      "size": 100
    },
    {
      "field": "email",
      "label": "email",
      "name": "email",
      "type": "string",
      "size": 100
    }
  ]
}
