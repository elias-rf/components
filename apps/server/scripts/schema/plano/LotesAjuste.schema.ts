import { TEntity } from "@er/types/*";

export const LotesAjuste: TEntity =
  {
  "database": "plano",
  "table": "LotesAjuste",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NumLote",
      "label": "NumLote",
      "name": "NumLote",
      "type": "string",
      "size": 18,
      "allowNull": false
    },
    {
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "SaldoAnterior",
      "label": "SaldoAnterior",
      "name": "SaldoAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SaldoNovo",
      "label": "SaldoNovo",
      "name": "SaldoNovo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgAlteraSaldo",
      "label": "FgAlteraSaldo",
      "name": "FgAlteraSaldo",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}