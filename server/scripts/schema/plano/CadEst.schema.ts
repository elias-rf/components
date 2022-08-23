import { TEntity } from "@er/types/*";

export const CadEst: TEntity =
  {
  "database": "plano",
  "table": "CadEst",
  "fields": [
    {
      "field": "Uf",
      "label": "Uf",
      "name": "CadEst_id",
      "type": "string",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmEstado",
      "label": "NmEstado",
      "name": "NmEstado",
      "type": "string",
      "size": 20
    },
    {
      "field": "DescontoSub",
      "label": "DescontoSub",
      "name": "DescontoSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "MargemSub",
      "label": "MargemSub",
      "name": "MargemSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseCalculo",
      "label": "BaseCalculo",
      "name": "BaseCalculo",
      "type": "string",
      "size": 1
    },
    {
      "field": "BaseReducao",
      "label": "BaseReducao",
      "name": "BaseReducao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "MargemSubPositivo",
      "label": "MargemSubPositivo",
      "name": "MargemSubPositivo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseReducaoPositivo",
      "label": "BaseReducaoPositivo",
      "name": "BaseReducaoPositivo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "MargemSubNegativo",
      "label": "MargemSubNegativo",
      "name": "MargemSubNegativo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseReducaoNegativo",
      "label": "BaseReducaoNegativo",
      "name": "BaseReducaoNegativo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercSubstituicaoTributaria",
      "label": "PercSubstituicaoTributaria",
      "name": "PercSubstituicaoTributaria",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliqSubstituicao",
      "label": "AliqSubstituicao",
      "name": "AliqSubstituicao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdIBGE",
      "label": "CdIBGE",
      "name": "CdIBGE",
      "type": "int",
      "size": 4
    },
    {
      "field": "PercCombatePobreza",
      "label": "PercCombatePobreza",
      "name": "PercCombatePobreza",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
