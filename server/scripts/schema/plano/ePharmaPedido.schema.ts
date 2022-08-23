import { TEntity } from "@er/types/*";

export const ePharmaPedido: TEntity =
  {
  "database": "plano",
  "table": "ePharmaPedido",
  "fields": [
    {
      "field": "NumAutorizacao",
      "label": "NumAutorizacao",
      "name": "ePharmaPedido_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DtAutorizacao",
      "label": "DtAutorizacao",
      "name": "DtAutorizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumeroTransacao",
      "label": "NumeroTransacao",
      "name": "NumeroTransacao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtValidadeAutorizacao",
      "label": "DtValidadeAutorizacao",
      "name": "DtValidadeAutorizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NmPaciente",
      "label": "NmPaciente",
      "name": "NmPaciente",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "SaldoCartao",
      "label": "SaldoCartao",
      "name": "SaldoCartao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtValidadeSaldo",
      "label": "DtValidadeSaldo",
      "name": "DtValidadeSaldo",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumCOO",
      "label": "NumCOO",
      "name": "NumCOO",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "DtMovimento",
      "label": "DtMovimento",
      "name": "DtMovimento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtConciliacao",
      "label": "DtConciliacao",
      "name": "DtConciliacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtPagamento",
      "label": "DtPagamento",
      "name": "DtPagamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "FgConciliacao",
      "label": "FgConciliacao",
      "name": "FgConciliacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
