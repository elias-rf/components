import { TEntity } from "@er/types/*";

export const Cores: TEntity =
  {
  "database": "plano",
  "table": "Cores",
  "fields": [
    {
      "field": "CdCor",
      "label": "CdCor",
      "name": "Cores_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 20
    }
  ]
}
