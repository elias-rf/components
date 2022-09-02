import { TEntity } from "@er/types/*";

export const Picture: TEntity =
  {
  "database": "plano",
  "table": "Picture",
  "fields": [
    {
      "field": "Numero",
      "label": "Numero",
      "name": "Picture_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Picture",
      "label": "Picture",
      "name": "Picture",
      "type": "string",
      "size": 255
    },
    {
      "field": "Tempo",
      "label": "Tempo",
      "name": "Tempo",
      "type": "int",
      "size": 4
    }
  ]
}
