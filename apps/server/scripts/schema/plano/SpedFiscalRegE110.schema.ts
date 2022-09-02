import { TEntity } from "@er/types/*";

export const SpedFiscalRegE110: TEntity =
  {
  "database": "plano",
  "table": "SpedFiscalRegE110",
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
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlAjusteDebito",
      "label": "VlAjusteDebito",
      "name": "VlAjusteDebito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAjusteDebitoTotal",
      "label": "VlAjusteDebitoTotal",
      "name": "VlAjusteDebitoTotal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlEstornoCredito",
      "label": "VlEstornoCredito",
      "name": "VlEstornoCredito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAjusteCredito",
      "label": "VlAjusteCredito",
      "name": "VlAjusteCredito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAjusteCreditoTotal",
      "label": "VlAjusteCreditoTotal",
      "name": "VlAjusteCreditoTotal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlEstornoDebito",
      "label": "VlEstornoDebito",
      "name": "VlEstornoDebito",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlSaldoCredorAnterior",
      "label": "VlSaldoCredorAnterior",
      "name": "VlSaldoCredorAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotalDeducoes",
      "label": "VlTotalDeducoes",
      "name": "VlTotalDeducoes",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlExtraApuracao",
      "label": "VlExtraApuracao",
      "name": "VlExtraApuracao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAtualizacao",
      "label": "DtUltAtualizacao",
      "name": "DtUltAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
