import { TEntity } from "@er/types/*";

export const NotaInformacaoComplementar: TEntity =
  {
  "database": "plano",
  "table": "NotaInformacaoComplementar",
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
      "field": "CdInformacaoComplementar",
      "label": "CdInformacaoComplementar",
      "name": "CdInformacaoComplementar",
      "type": "int",
      "size": 2,
      "allowNull": false
    }
  ]
}
