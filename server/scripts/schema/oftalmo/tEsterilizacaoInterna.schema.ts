import { TEntity } from "@er/types/*";

export const tEsterilizacaoInterna: TEntity =
  {
  "database": "oftalmo",
  "table": "tEsterilizacaoInterna",
  "fields": [
    {
      "field": "kLoteEstInt",
      "label": "kLoteEstInt",
      "name": "tEsterilizacaoInterna_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Resultado",
      "label": "Resultado",
      "name": "Resultado",
      "type": "string",
      "size": 1
    },
    {
      "field": "UsuarioResultado",
      "label": "UsuarioResultado",
      "name": "UsuarioResultado",
      "type": "string",
      "size": 50
    },
    {
      "field": "Obs",
      "label": "Obs",
      "name": "Obs",
      "type": "string",
      "size": 4000
    },
    {
      "field": "Fechado",
      "label": "Fechado",
      "name": "Fechado",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "UsuarioFechamento",
      "label": "UsuarioFechamento",
      "name": "UsuarioFechamento",
      "type": "string",
      "size": 50
    },
    {
      "field": "DataFechamento",
      "label": "DataFechamento",
      "name": "DataFechamento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DataHoraAutoclave",
      "label": "DataHoraAutoclave",
      "name": "DataHoraAutoclave",
      "type": "date",
      "size": 4
    }
  ]
}
