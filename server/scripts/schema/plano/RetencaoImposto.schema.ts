import { TEntity } from "@er/types/*";

export const RetencaoImposto: TEntity =
  {
  "database": "plano",
  "table": "RetencaoImposto",
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
      "field": "CNPJ",
      "label": "CNPJ",
      "name": "CNPJ",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDocumentoCredito",
      "label": "NumDocumentoCredito",
      "name": "NumDocumentoCredito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SerieCredito",
      "label": "SerieCredito",
      "name": "SerieCredito",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "DtCredito",
      "label": "DtCredito",
      "name": "DtCredito",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlCredito",
      "label": "VlCredito",
      "name": "VlCredito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumDocumentoDebito",
      "label": "NumDocumentoDebito",
      "name": "NumDocumentoDebito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SerieDebito",
      "label": "SerieDebito",
      "name": "SerieDebito",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "DtDebito",
      "label": "DtDebito",
      "name": "DtDebito",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlDebito",
      "label": "VlDebito",
      "name": "VlDebito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
