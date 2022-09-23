import { TEntity } from "@er/types/*";

export const ePharmaMensagens: TEntity =
  {
  "database": "plano",
  "table": "ePharmaMensagens",
  "fields": [
    {
      "field": "CdMensagem",
      "label": "CdMensagem",
      "name": "ePharmaMensagens_id",
      "type": "string",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DescricaoMensagem",
      "label": "DescricaoMensagem",
      "name": "DescricaoMensagem",
      "type": "string",
      "size": 64,
      "allowNull": false
    }
  ]
}