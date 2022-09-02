import { TEntity } from "@er/types/*";

export const tAuditoria: TEntity =
  {
  "database": "oftalmo",
  "table": "tAuditoria",
  "fields": [
    {
      "field": "id",
      "label": "id",
      "name": "tAuditoria_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "estacao",
      "label": "estacao",
      "name": "estacao",
      "type": "string",
      "size": 50
    },
    {
      "field": "data",
      "label": "data",
      "name": "data",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "defaultValue": "getdate()"
    },
    {
      "field": "hora",
      "label": "hora",
      "name": "hora",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "defaultValue": "getdate()"
    },
    {
      "field": "usuario",
      "label": "usuario",
      "name": "usuario",
      "type": "string",
      "size": 50
    },
    {
      "field": "operacao",
      "label": "operacao",
      "name": "operacao",
      "type": "string",
      "size": 200
    }
  ]
}
