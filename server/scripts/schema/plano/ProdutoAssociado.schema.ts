import { TEntity } from "@er/types/*";

export const ProdutoAssociado: TEntity =
  {
  "database": "plano",
  "table": "ProdutoAssociado",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Fracao",
      "label": "Fracao",
      "name": "Fracao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
