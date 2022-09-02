import { TEntity } from "@er/types/*";

export const AnexosRat: TEntity =
  {
  "database": "plano",
  "table": "AnexosRat",
  "fields": [
    {
      "field": "CdAnexosRat",
      "label": "CdAnexosRat",
      "name": "AnexosRat_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NumeroRat",
      "label": "NumeroRat",
      "name": "NumeroRat",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NomeAnexo",
      "label": "NomeAnexo",
      "name": "NomeAnexo",
      "type": "string",
      "size": 250,
      "allowNull": false
    },
    {
      "field": "Anexo",
      "label": "Anexo",
      "name": "Anexo",
      "type": "image",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 9,
      "allowNull": false
    }
  ]
}
