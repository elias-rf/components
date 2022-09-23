import { TEntity } from "@er/types/*";

export const MovCreditoFornecedor: TEntity =
  {
  "database": "plano",
  "table": "MovCreditoFornecedor",
  "fields": [
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDocOrigem",
      "label": "NumDocOrigem",
      "name": "NumDocOrigem",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumDocDestino",
      "label": "NumDocDestino",
      "name": "NumDocDestino",
      "type": "int",
      "size": 4,
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
      "field": "VlDebito",
      "label": "VlDebito",
      "name": "VlDebito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    }
  ]
}