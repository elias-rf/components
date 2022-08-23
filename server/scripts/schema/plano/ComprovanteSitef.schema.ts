import { TEntity } from "@er/types/*";

export const ComprovanteSitef: TEntity =
  {
  "database": "plano",
  "table": "ComprovanteSitef",
  "fields": [
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 4,
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
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Comprovante",
      "label": "Comprovante",
      "name": "Comprovante",
      "type": "string",
      "size": 4096,
      "allowNull": false
    },
    {
      "field": "DtGeracao",
      "label": "DtGeracao",
      "name": "DtGeracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 64,
      "allowNull": false
    }
  ]
}
