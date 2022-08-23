import { TEntity } from "@er/types/*";

export const ContratoAluguelContagemMestre: TEntity =
  {
  "database": "plano",
  "table": "ContratoAluguelContagemMestre",
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
      "field": "DiaContr",
      "label": "DiaContr",
      "name": "DiaContr",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtContagem",
      "label": "DtContagem",
      "name": "DtContagem",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioContagem",
      "label": "UsuarioContagem",
      "name": "UsuarioContagem",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "VlFranquia",
      "label": "VlFranquia",
      "name": "VlFranquia",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeFranquia",
      "label": "QtdeFranquia",
      "name": "QtdeFranquia",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeContada",
      "label": "QtdeContada",
      "name": "QtdeContada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlUnitExcedente",
      "label": "VlUnitExcedente",
      "name": "VlUnitExcedente",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "UsuarioNota",
      "label": "UsuarioNota",
      "name": "UsuarioNota",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    }
  ]
}
