import { TEntity } from "@er/types/*";

export const ItensSubstituicao: TEntity =
  {
  "database": "plano",
  "table": "ItensSubstituicao",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtEntrada",
      "label": "DtEntrada",
      "name": "DtEntrada",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumNfEntrada",
      "label": "NumNfEntrada",
      "name": "NumNfEntrada",
      "type": "int",
      "size": 4
    },
    {
      "field": "SerieNfEntrada",
      "label": "SerieNfEntrada",
      "name": "SerieNfEntrada",
      "type": "string",
      "size": 3
    },
    {
      "field": "VlSubstituido",
      "label": "VlSubstituido",
      "name": "VlSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIcmsSubstituido",
      "label": "VlIcmsSubstituido",
      "name": "VlIcmsSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtSaida",
      "label": "DtSaida",
      "name": "DtSaida",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumNfSaida",
      "label": "NumNfSaida",
      "name": "NumNfSaida",
      "type": "int",
      "size": 4
    },
    {
      "field": "SerieNfSaida",
      "label": "SerieNfSaida",
      "name": "SerieNfSaida",
      "type": "string",
      "size": 3
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
