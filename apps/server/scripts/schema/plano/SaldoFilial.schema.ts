import { TEntity } from "@er/types/*";

export const SaldoFilial: TEntity =
  {
  "database": "plano",
  "table": "SaldoFilial",
  "fields": [
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumConta",
      "label": "NumConta",
      "name": "NumConta",
      "type": "string",
      "size": 12,
      "allowNull": false
    },
    {
      "field": "DtSaldo",
      "label": "DtSaldo",
      "name": "DtSaldo",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
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
      "field": "Valor",
      "label": "Valor",
      "name": "Valor",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
