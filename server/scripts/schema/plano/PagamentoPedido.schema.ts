import { TEntity } from "@er/types/*";

export const PagamentoPedido: TEntity =
  {
  "database": "plano",
  "table": "PagamentoPedido",
  "fields": [
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdClienteAssociado",
      "label": "CdClienteAssociado",
      "name": "CdClienteAssociado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtVencimento",
      "label": "DtVencimento",
      "name": "DtVencimento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "ItemDoc",
      "label": "ItemDoc",
      "name": "ItemDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NmCartao",
      "label": "NmCartao",
      "name": "NmCartao",
      "type": "string",
      "size": 15
    },
    {
      "field": "NumCheque",
      "label": "NumCheque",
      "name": "NumCheque",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumConta",
      "label": "NumConta",
      "name": "NumConta",
      "type": "string",
      "size": 12
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "ParcelasCartao",
      "label": "ParcelasCartao",
      "name": "ParcelasCartao",
      "type": "int",
      "size": 4
    },
    {
      "field": "Prazo",
      "label": "Prazo",
      "name": "Prazo",
      "type": "int",
      "size": 4
    },
    {
      "field": "SiglaDoc",
      "label": "SiglaDoc",
      "name": "SiglaDoc",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Taxa",
      "label": "Taxa",
      "name": "Taxa",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCorrecao",
      "label": "VlCorrecao",
      "name": "VlCorrecao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPrincipal",
      "label": "VlPrincipal",
      "name": "VlPrincipal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NmFuncionario",
      "label": "NmFuncionario",
      "name": "NmFuncionario",
      "type": "string",
      "size": 40
    },
    {
      "field": "CdCondPagto",
      "label": "CdCondPagto",
      "name": "CdCondPagto",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgCobrancaBancaria",
      "label": "FgCobrancaBancaria",
      "name": "FgCobrancaBancaria",
      "type": "string",
      "size": 1
    }
  ]
}
