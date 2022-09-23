import { TEntity } from "@er/types/*";

export const MestreNotaServicoIntermediario: TEntity =
  {
  "database": "plano",
  "table": "MestreNotaServicoIntermediario",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "RazaoSocialIntermediario",
      "label": "RazaoSocialIntermediario",
      "name": "RazaoSocialIntermediario",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "CPFCNPJIntermediario",
      "label": "CPFCNPJIntermediario",
      "name": "CPFCNPJIntermediario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "InscMunicipalIntermediario",
      "label": "InscMunicipalIntermediario",
      "name": "InscMunicipalIntermediario",
      "type": "string",
      "size": 64,
      "allowNull": false
    }
  ]
}