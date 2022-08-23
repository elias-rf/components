import { TEntity } from "@er/types/*";

export const TabLan: TEntity =
  {
  "database": "plano",
  "table": "TabLan",
  "fields": [
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 2,
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
      "field": "NumLcto",
      "label": "NumLcto",
      "name": "NumLcto",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "TipAplic",
      "label": "TipAplic",
      "name": "TipAplic",
      "type": "string",
      "size": 20
    },
    {
      "field": "VlAplicado",
      "label": "VlAplicado",
      "name": "VlAplicado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "LctoDiv",
      "label": "LctoDiv",
      "name": "LctoDiv",
      "type": "int",
      "size": 2
    },
    {
      "field": "VlResgate",
      "label": "VlResgate",
      "name": "VlResgate",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "LctoResg",
      "label": "LctoResg",
      "name": "LctoResg",
      "type": "int",
      "size": 4
    },
    {
      "field": "LctoRend",
      "label": "LctoRend",
      "name": "LctoRend",
      "type": "int",
      "size": 4
    }
  ]
}
