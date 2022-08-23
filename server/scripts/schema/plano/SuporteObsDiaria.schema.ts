import { TEntity } from "@er/types/*";

export const SuporteObsDiaria: TEntity =
  {
  "database": "plano",
  "table": "SuporteObsDiaria",
  "fields": [
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "DtReferencia",
      "label": "DtReferencia",
      "name": "DtReferencia",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 3072,
      "allowNull": false
    }
  ]
}
