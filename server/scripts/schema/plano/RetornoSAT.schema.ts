import { TEntity } from "@er/types/*";

export const RetornoSAT: TEntity =
  {
  "database": "plano",
  "table": "RetornoSAT",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
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
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "NumChave",
      "label": "NumChave",
      "name": "NumChave",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlTotalCfe",
      "label": "VlTotalCfe",
      "name": "VlTotalCfe",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CpfCnpj",
      "label": "CpfCnpj",
      "name": "CpfCnpj",
      "type": "string",
      "size": 24,
      "allowNull": false
    },
    {
      "field": "AssinaturaQrCode",
      "label": "AssinaturaQrCode",
      "name": "AssinaturaQrCode",
      "type": "string",
      "size": 4096,
      "allowNull": false
    }
  ]
}
