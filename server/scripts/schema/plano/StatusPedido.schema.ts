import { TEntity } from "@er/types/*";

export const StatusPedido: TEntity =
  {
  "database": "plano",
  "table": "StatusPedido",
  "fields": [
    {
      "field": "CdStatus",
      "label": "CdStatus",
      "name": "StatusPedido_id",
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
      "size": 50
    }
  ]
}
