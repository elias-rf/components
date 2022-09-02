import { TEntity } from "@er/types/*";

export const ePharmaStatus: TEntity =
  {
  "database": "plano",
  "table": "ePharmaStatus",
  "fields": [
    {
      "field": "Identificacao",
      "label": "Identificacao",
      "name": "ePharmaStatus_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DtUltEncerramento",
      "label": "DtUltEncerramento",
      "name": "DtUltEncerramento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtInicializacao",
      "label": "DtInicializacao",
      "name": "DtInicializacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
