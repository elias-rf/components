import { TEntity } from "@er/types/*";

export const LancCheque: TEntity =
  {
  "database": "plano",
  "table": "LancCheque",
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
      "field": "NumCheque",
      "label": "NumCheque",
      "name": "NumCheque",
      "type": "int",
      "size": 4,
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
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
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "SeqDoc",
      "label": "SeqDoc",
      "name": "SeqDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "VlBruto",
      "label": "VlBruto",
      "name": "VlBruto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAbatimento",
      "label": "VlAbatimento",
      "name": "VlAbatimento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAcrescimo",
      "label": "VlAcrescimo",
      "name": "VlAcrescimo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    }
  ]
}
