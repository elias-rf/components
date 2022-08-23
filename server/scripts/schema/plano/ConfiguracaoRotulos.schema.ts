import { TEntity } from "@er/types/*";

export const ConfiguracaoRotulos: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoRotulos",
  "fields": [
    {
      "field": "CdRotulo",
      "label": "CdRotulo",
      "name": "ConfiguracaoRotulos_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Identificacao",
      "label": "Identificacao",
      "name": "Identificacao",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "Altura",
      "label": "Altura",
      "name": "Altura",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Fonte",
      "label": "Fonte",
      "name": "Fonte",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "NumLinhas",
      "label": "NumLinhas",
      "name": "NumLinhas",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumColunas",
      "label": "NumColunas",
      "name": "NumColunas",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Deslocamento",
      "label": "Deslocamento",
      "name": "Deslocamento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "LinhaCliente",
      "label": "LinhaCliente",
      "name": "LinhaCliente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "LinhaMedico",
      "label": "LinhaMedico",
      "name": "LinhaMedico",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "LinhaDescricao",
      "label": "LinhaDescricao",
      "name": "LinhaDescricao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "LinhaValidade",
      "label": "LinhaValidade",
      "name": "LinhaValidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CaracterDeslocamento",
      "label": "CaracterDeslocamento",
      "name": "CaracterDeslocamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "Densidade",
      "label": "Densidade",
      "name": "Densidade",
      "type": "int",
      "size": 2
    }
  ]
}
