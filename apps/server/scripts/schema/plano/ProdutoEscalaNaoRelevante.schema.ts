import { TEntity } from "@er/types/*";

export const ProdutoEscalaNaoRelevante: TEntity =
  {
  "database": "plano",
  "table": "ProdutoEscalaNaoRelevante",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "ProdutoEscalaNaoRelevante_id",
      "type": "string",
      "size": 18,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CNPJFabricante",
      "label": "CNPJFabricante",
      "name": "CNPJFabricante",
      "type": "int",
      "size": 9,
      "allowNull": false
    }
  ]
}
