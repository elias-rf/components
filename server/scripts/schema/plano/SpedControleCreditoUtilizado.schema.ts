import { TEntity } from "@er/types/*";

export const SpedControleCreditoUtilizado: TEntity =
  {
  "database": "plano",
  "table": "SpedControleCreditoUtilizado",
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
      "field": "PeriodoUtilizacao",
      "label": "PeriodoUtilizacao",
      "name": "PeriodoUtilizacao",
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
      "field": "VlCreditoUtilizado",
      "label": "VlCreditoUtilizado",
      "name": "VlCreditoUtilizado",
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
