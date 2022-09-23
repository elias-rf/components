import { TEntity } from "@er/types/*";

export const ContasReceberCheque: TEntity =
  {
  "database": "plano",
  "table": "ContasReceberCheque",
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
      "field": "CdBancoCheque",
      "label": "CdBancoCheque",
      "name": "CdBancoCheque",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdAgenciaCheque",
      "label": "CdAgenciaCheque",
      "name": "CdAgenciaCheque",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumContaCheque",
      "label": "NumContaCheque",
      "name": "NumContaCheque",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NumCheque",
      "label": "NumCheque",
      "name": "NumCheque",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NmEmitenteCheque",
      "label": "NmEmitenteCheque",
      "name": "NmEmitenteCheque",
      "type": "string",
      "size": 80,
      "allowNull": false
    },
    {
      "field": "TarjaCheque",
      "label": "TarjaCheque",
      "name": "TarjaCheque",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "FgStatusCheque",
      "label": "FgStatusCheque",
      "name": "FgStatusCheque",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtInclusao",
      "label": "DtInclusao",
      "name": "DtInclusao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
    }
  ]
}