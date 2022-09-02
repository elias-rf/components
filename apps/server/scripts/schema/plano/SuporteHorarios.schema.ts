import { TEntity } from "@er/types/*";

export const SuporteHorarios: TEntity =
  {
  "database": "plano",
  "table": "SuporteHorarios",
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
      "field": "DataHoraReferencia",
      "label": "DataHoraReferencia",
      "name": "DataHoraReferencia",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
