import { TEntity } from "@er/types/*";

export const cidadesERF: TEntity =
  {
  "database": "plano",
  "table": "cidadesERF",
  "fields": [
    {
      "field": "CdUFIBGE",
      "label": "CdUFIBGE",
      "name": "CdUFIBGE",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdCidadeIBGE",
      "label": "CdCidadeIBGE",
      "name": "CdCidadeIBGE",
      "type": "string",
      "size": 5
    },
    {
      "field": "NmCidadeIBGE",
      "label": "NmCidadeIBGE",
      "name": "NmCidadeIBGE",
      "type": "string",
      "size": 80
    },
    {
      "field": "uf",
      "label": "uf",
      "name": "uf",
      "type": "string",
      "size": 3
    },
    {
      "field": "ufOld",
      "label": "ufOld",
      "name": "ufOld",
      "type": "string",
      "size": 2
    }
  ]
}
