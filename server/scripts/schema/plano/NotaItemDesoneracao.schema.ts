import { TEntity } from "@er/types/*";

export const NotaItemDesoneracao: TEntity =
  {
  "database": "plano",
  "table": "NotaItemDesoneracao",
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdBeneficioFiscal",
      "label": "CdBeneficioFiscal",
      "name": "CdBeneficioFiscal",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "AliquotaDesoneracao",
      "label": "AliquotaDesoneracao",
      "name": "AliquotaDesoneracao",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "VlDesoneracao",
      "label": "VlDesoneracao",
      "name": "VlDesoneracao",
      "type": "int",
      "size": 9,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "CdMotivoDesoneracao",
      "label": "CdMotivoDesoneracao",
      "name": "CdMotivoDesoneracao",
      "type": "int",
      "size": 5,
      "allowNull": false
    }
  ]
}
