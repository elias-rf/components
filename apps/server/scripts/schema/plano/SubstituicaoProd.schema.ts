import { TEntity } from "@er/types/*";

export const SubstituicaoProd: TEntity =
  {
  "database": "plano",
  "table": "SubstituicaoProd",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "CdAssociado",
      "label": "CdAssociado",
      "name": "CdAssociado",
      "type": "string",
      "size": 15,
      "allowNull": false
    }
  ]
}