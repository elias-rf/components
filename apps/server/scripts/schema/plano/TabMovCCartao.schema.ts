import { TEntity } from "@er/types/*";

export const TabMovCCartao: TEntity =
  {
  "database": "plano",
  "table": "TabMovCCartao",
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
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 16,
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
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
      "field": "Bandeira",
      "label": "Bandeira",
      "name": "Bandeira",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CNPJCredenciadora",
      "label": "CNPJCredenciadora",
      "name": "CNPJCredenciadora",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "TipoIntegracao",
      "label": "TipoIntegracao",
      "name": "TipoIntegracao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumAutorizacao",
      "label": "NumAutorizacao",
      "name": "NumAutorizacao",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "CdCredenciadora",
      "label": "CdCredenciadora",
      "name": "CdCredenciadora",
      "type": "int",
      "size": 5
    }
  ]
}