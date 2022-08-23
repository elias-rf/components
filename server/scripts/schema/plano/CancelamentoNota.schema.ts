import { TEntity } from "@er/types/*";

export const CancelamentoNota: TEntity =
  {
  "database": "plano",
  "table": "CancelamentoNota",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "DtCancelamento",
      "label": "DtCancelamento",
      "name": "DtCancelamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NmUsuario",
      "label": "NmUsuario",
      "name": "NmUsuario",
      "type": "string",
      "size": 40
    },
    {
      "field": "Motivo",
      "label": "Motivo",
      "name": "Motivo",
      "type": "string",
      "size": 1024
    },
    {
      "field": "CdMotivoCancelamento",
      "label": "CdMotivoCancelamento",
      "name": "CdMotivoCancelamento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    }
  ]
}
