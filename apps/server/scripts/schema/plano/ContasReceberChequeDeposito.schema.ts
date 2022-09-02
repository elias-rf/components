import { TEntity } from "@er/types/*";

export const ContasReceberChequeDeposito: TEntity =
  {
  "database": "plano",
  "table": "ContasReceberChequeDeposito",
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
      "field": "CdBancoDeposito",
      "label": "CdBancoDeposito",
      "name": "CdBancoDeposito",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdAgenciaDeposito",
      "label": "CdAgenciaDeposito",
      "name": "CdAgenciaDeposito",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumContaDeposito",
      "label": "NumContaDeposito",
      "name": "NumContaDeposito",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NumLancamentoDeposito",
      "label": "NumLancamentoDeposito",
      "name": "NumLancamentoDeposito",
      "type": "int",
      "size": 5,
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
