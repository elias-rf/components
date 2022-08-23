import { TEntity } from "@er/types/*";

export const RotuloFormula: TEntity =
  {
  "database": "plano",
  "table": "RotuloFormula",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NmCliente",
      "label": "NmCliente",
      "name": "NmCliente",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "NmMedico",
      "label": "NmMedico",
      "name": "NmMedico",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "CdRotulo",
      "label": "CdRotulo",
      "name": "CdRotulo",
      "type": "int",
      "size": 4
    },
    {
      "field": "DescricaoRotulo",
      "label": "DescricaoRotulo",
      "name": "DescricaoRotulo",
      "type": "string",
      "size": 3072
    },
    {
      "field": "FgImpressao",
      "label": "FgImpressao",
      "name": "FgImpressao",
      "type": "string",
      "size": 1
    }
  ]
}
