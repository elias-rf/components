import { TEntity } from "@er/types/*";

export const MestreNotaImpostoRetido: TEntity =
  {
  "database": "plano",
  "table": "MestreNotaImpostoRetido",
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
      "field": "VlPISRetido",
      "label": "VlPISRetido",
      "name": "VlPISRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCOFINSRetido",
      "label": "VlCOFINSRetido",
      "name": "VlCOFINSRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCSLLRetido",
      "label": "VlCSLLRetido",
      "name": "VlCSLLRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoIRRF",
      "label": "VlBaseCalculoIRRF",
      "name": "VlBaseCalculoIRRF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIRRFRetido",
      "label": "VlIRRFRetido",
      "name": "VlIRRFRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoPrevidencia",
      "label": "VlBaseCalculoPrevidencia",
      "name": "VlBaseCalculoPrevidencia",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPrevidenciaRetido",
      "label": "VlPrevidenciaRetido",
      "name": "VlPrevidenciaRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
