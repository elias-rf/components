import { TEntity } from "@er/types/*";

export const ObsItemMapaAcerto: TEntity =
  {
  "database": "plano",
  "table": "ObsItemMapaAcerto",
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
      "field": "NumMapa",
      "label": "NumMapa",
      "name": "NumMapa",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
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
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 512
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
      "field": "SiglaDoc",
      "label": "SiglaDoc",
      "name": "SiglaDoc",
      "type": "string",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "ItemDoc",
      "label": "ItemDoc",
      "name": "ItemDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}
