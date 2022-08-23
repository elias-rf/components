import { TEntity } from "@er/types/*";

export const tEsterilizacaoExterna: TEntity =
  {
  "database": "oftalmo",
  "table": "tEsterilizacaoExterna",
  "fields": [
    {
      "field": "kLoteEstExt",
      "label": "kLoteEstExt",
      "name": "tEsterilizacaoExterna_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataRetorno",
      "label": "DataRetorno",
      "name": "DataRetorno",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "QtdCaixa",
      "label": "QtdCaixa",
      "name": "QtdCaixa",
      "type": "int",
      "size": 4
    },
    {
      "field": "Fechado",
      "label": "Fechado",
      "name": "Fechado",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
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
      "size": 200
    },
    {
      "field": "LoteEto",
      "label": "LoteEto",
      "name": "LoteEto",
      "type": "string",
      "size": 50
    }
  ]
}
