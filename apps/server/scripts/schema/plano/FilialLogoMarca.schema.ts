import { TEntity } from "@er/types/*";

export const FilialLogoMarca: TEntity =
  {
  "database": "plano",
  "table": "FilialLogoMarca",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "FilialLogoMarca_id",
      "type": "int",
      "size": 9,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Imagem",
      "label": "Imagem",
      "name": "Imagem",
      "type": "image",
      "size": 16,
      "allowNull": false
    }
  ]
}
