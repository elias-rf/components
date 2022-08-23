import { TEntity } from "@er/types/*";

export const NFe2GCorrecao: TEntity =
  {
  "database": "plano",
  "table": "NFe2GCorrecao",
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
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 2,
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
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Correcao",
      "label": "Correcao",
      "name": "Correcao",
      "type": "string",
      "size": 1000,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Status",
      "label": "Status",
      "name": "Status",
      "type": "int",
      "size": 5
    },
    {
      "field": "NumProtocolo",
      "label": "NumProtocolo",
      "name": "NumProtocolo",
      "type": "string",
      "size": 32
    }
  ]
}
