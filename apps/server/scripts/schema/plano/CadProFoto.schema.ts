import { TEntity } from "@er/types/*";

export const CadProFoto: TEntity =
  {
  "database": "plano",
  "table": "CadProFoto",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CadProFoto_id",
      "type": "string",
      "size": 15,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Foto",
      "label": "Foto",
      "name": "Foto",
      "type": "ntext",
      "size": 8,
      "allowNull": false
    }
  ]
}
