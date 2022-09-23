import { TEntity } from "@er/types/*";

export const MestreNotaServicoSubstituido: TEntity =
  {
  "database": "plano",
  "table": "MestreNotaServicoSubstituido",
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
      "field": "NumeroSubstituido",
      "label": "NumeroSubstituido",
      "name": "NumeroSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SerieSubstituido",
      "label": "SerieSubstituido",
      "name": "SerieSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoSubstituido",
      "label": "TipoSubstituido",
      "name": "TipoSubstituido",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}