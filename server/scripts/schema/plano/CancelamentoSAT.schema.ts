import { TEntity } from "@er/types/*";

export const CancelamentoSAT: TEntity =
  {
  "database": "plano",
  "table": "CancelamentoSAT",
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
      "size": 128
    },
    {
      "field": "NumSessao",
      "label": "NumSessao",
      "name": "NumSessao",
      "type": "string",
      "size": 32
    },
    {
      "field": "DtCancelamento",
      "label": "DtCancelamento",
      "name": "DtCancelamento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumDocumentoSAT",
      "label": "NumDocumentoSAT",
      "name": "NumDocumentoSAT",
      "type": "int",
      "size": 5
    },
    {
      "field": "CpfCnpjConsumidor",
      "label": "CpfCnpjConsumidor",
      "name": "CpfCnpjConsumidor",
      "type": "string",
      "size": 32
    },
    {
      "field": "VlTotalCupom",
      "label": "VlTotalCupom",
      "name": "VlTotalCupom",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AssinaturaQrCode",
      "label": "AssinaturaQrCode",
      "name": "AssinaturaQrCode",
      "type": "string",
      "size": 4096
    }
  ]
}
