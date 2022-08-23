import { TEntity } from "@er/types/*";

export const ConfigConvenio: TEntity =
  {
  "database": "plano",
  "table": "ConfigConvenio",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "Codigo",
      "label": "Codigo",
      "name": "Codigo",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "FgPermissao",
      "label": "FgPermissao",
      "name": "FgPermissao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "PercDesconto",
      "label": "PercDesconto",
      "name": "PercDesconto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
