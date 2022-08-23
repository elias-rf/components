import { TEntity } from "@er/types/*";

export const BancoContaCorrenteBoletoFilial: TEntity =
  {
  "database": "plano",
  "table": "BancoContaCorrenteBoletoFilial",
  "fields": [
    {
      "field": "NumBanco",
      "label": "NumBanco",
      "name": "NumBanco",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumAgencia",
      "label": "NumAgencia",
      "name": "NumAgencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumContaCorrente",
      "label": "NumContaCorrente",
      "name": "NumContaCorrente",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    }
  ]
}
