import { TEntity } from "@er/types/*";

export const Nfe2GInutilizacao: TEntity =
  {
  "database": "plano",
  "table": "Nfe2GInutilizacao",
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
      "field": "MotivoInutilizacao",
      "label": "MotivoInutilizacao",
      "name": "MotivoInutilizacao",
      "type": "string",
      "size": 1024,
      "allowNull": false
    },
    {
      "field": "DtInutilizacao",
      "label": "DtInutilizacao",
      "name": "DtInutilizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioInutilizacao",
      "label": "UsuarioInutilizacao",
      "name": "UsuarioInutilizacao",
      "type": "string",
      "size": 16,
      "allowNull": false
    }
  ]
}