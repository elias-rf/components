import { TEntity } from "@er/types/*";

export const groupSubject: TEntity =
  {
  "database": "oftalmo",
  "table": "groupSubject",
  "fields": [
    {
      "field": "idGroup",
      "label": "idGroup",
      "name": "idGroup",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "idSubject",
      "label": "idSubject",
      "name": "idSubject",
      "type": "string",
      "size": 50,
      "allowNull": false
    }
  ]
}
