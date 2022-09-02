import { TEntity } from "@er/types/*";

export const NFe: TEntity =
  {
  "database": "plano",
  "table": "NFe",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "float",
      "size": 9,
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
      "field": "DtSolicitacao",
      "label": "DtSolicitacao",
      "name": "DtSolicitacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtAutorizacao",
      "label": "DtAutorizacao",
      "name": "DtAutorizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Situacao",
      "label": "Situacao",
      "name": "Situacao",
      "type": "string",
      "size": 600
    },
    {
      "field": "fgDanfe",
      "label": "fgDanfe",
      "name": "fgDanfe",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "AutorExpedida",
      "label": "AutorExpedida",
      "name": "AutorExpedida",
      "type": "string",
      "size": 100
    },
    {
      "field": "ChaveNFe",
      "label": "ChaveNFe",
      "name": "ChaveNFe",
      "type": "string",
      "size": 600
    },
    {
      "field": "ReciboNFe",
      "label": "ReciboNFe",
      "name": "ReciboNFe",
      "type": "string",
      "size": 600
    }
  ]
}
