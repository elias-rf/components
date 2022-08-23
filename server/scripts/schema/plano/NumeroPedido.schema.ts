import { TEntity } from "@er/types/*";

export const NumeroPedido: TEntity =
  {
  "database": "plano",
  "table": "NumeroPedido",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "NumeroPedido_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NumUltPedido",
      "label": "NumUltPedido",
      "name": "NumUltPedido",
      "type": "int",
      "size": 4
    }
  ]
}
