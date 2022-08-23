import { TEntity } from "@er/types/*";

export const ContasReceberChequeRenegociado: TEntity =
  {
  "database": "plano",
  "table": "ContasReceberChequeRenegociado",
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
      "field": "NumDocumento",
      "label": "NumDocumento",
      "name": "NumDocumento",
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
      "field": "SiglaDocumento",
      "label": "SiglaDocumento",
      "name": "SiglaDocumento",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ItemDocumento",
      "label": "ItemDocumento",
      "name": "ItemDocumento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NmPortador",
      "label": "NmPortador",
      "name": "NmPortador",
      "type": "string",
      "size": 256
    },
    {
      "field": "DtInclusao",
      "label": "DtInclusao",
      "name": "DtInclusao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
