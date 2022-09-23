import { TEntity } from "@er/types/*";

export const TitCobrLinhaDigitavel: TEntity =
  {
  "database": "plano",
  "table": "TitCobrLinhaDigitavel",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 5,
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
      "field": "SiglaDoc",
      "label": "SiglaDoc",
      "name": "SiglaDoc",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ItemDoc",
      "label": "ItemDoc",
      "name": "ItemDoc",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "LinhaDigitavel",
      "label": "LinhaDigitavel",
      "name": "LinhaDigitavel",
      "type": "string",
      "size": 64,
      "allowNull": false
    }
  ]
}