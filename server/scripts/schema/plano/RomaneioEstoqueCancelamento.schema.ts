import { TEntity } from "@er/types/*";

export const RomaneioEstoqueCancelamento: TEntity =
  {
  "database": "plano",
  "table": "RomaneioEstoqueCancelamento",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumRomaneio",
      "label": "NumRomaneio",
      "name": "NumRomaneio",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Motivo",
      "label": "Motivo",
      "name": "Motivo",
      "type": "string",
      "size": 1028,
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
      "field": "UsuarioCancelamento",
      "label": "UsuarioCancelamento",
      "name": "UsuarioCancelamento",
      "type": "string",
      "size": 32,
      "allowNull": false
    }
  ]
}
