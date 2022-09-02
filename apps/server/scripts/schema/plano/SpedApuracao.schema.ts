import { TEntity } from "@er/types/*";

export const SpedApuracao: TEntity =
  {
  "database": "plano",
  "table": "SpedApuracao",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1,
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
      "field": "OrigemCredito",
      "label": "OrigemCredito",
      "name": "OrigemCredito",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CNPJCedente",
      "label": "CNPJCedente",
      "name": "CNPJCedente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdTipoCredito",
      "label": "CdTipoCredito",
      "name": "CdTipoCredito",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlApuradoAnterior",
      "label": "VlApuradoAnterior",
      "name": "VlApuradoAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlExtemporaneoAnterior",
      "label": "VlExtemporaneoAnterior",
      "name": "VlExtemporaneoAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescontoAnterior",
      "label": "VlDescontoAnterior",
      "name": "VlDescontoAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlRessarcimentoAnterior",
      "label": "VlRessarcimentoAnterior",
      "name": "VlRessarcimentoAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDCIAnterior",
      "label": "VlDCIAnterior",
      "name": "VlDCIAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescontoPeriodo",
      "label": "VlDescontoPeriodo",
      "name": "VlDescontoPeriodo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlRessarcimentoPeriodo",
      "label": "VlRessarcimentoPeriodo",
      "name": "VlRessarcimentoPeriodo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDCIPeriodo",
      "label": "VlDCIPeriodo",
      "name": "VlDCIPeriodo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTransferido",
      "label": "VlTransferido",
      "name": "VlTransferido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlOutrasFormas",
      "label": "VlOutrasFormas",
      "name": "VlOutrasFormas",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
