import { TEntity } from "@er/types/*";

export const SpedControleCredito: TEntity =
  {
  "database": "plano",
  "table": "SpedControleCredito",
  "fields": [
    {
      "field": "Cnpj",
      "label": "Cnpj",
      "name": "Cnpj",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "PeriodoApuracao",
      "label": "PeriodoApuracao",
      "name": "PeriodoApuracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "TipoImposto",
      "label": "TipoImposto",
      "name": "TipoImposto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdCredito",
      "label": "CdCredito",
      "name": "CdCredito",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlCreditoPeriodo",
      "label": "VlCreditoPeriodo",
      "name": "VlCreditoPeriodo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDebitoPeriodo",
      "label": "VlDebitoPeriodo",
      "name": "VlDebitoPeriodo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlResultadoPeriodo",
      "label": "VlResultadoPeriodo",
      "name": "VlResultadoPeriodo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlSaldoCredito",
      "label": "VlSaldoCredito",
      "name": "VlSaldoCredito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlUtilizadoForaPeriodo",
      "label": "VlUtilizadoForaPeriodo",
      "name": "VlUtilizadoForaPeriodo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtGeracao",
      "label": "DtGeracao",
      "name": "DtGeracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
