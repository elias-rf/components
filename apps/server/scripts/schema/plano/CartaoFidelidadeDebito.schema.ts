import { TEntity } from "@er/types/*";

export const CartaoFidelidadeDebito: TEntity =
  {
  "database": "plano",
  "table": "CartaoFidelidadeDebito",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "DtMovimentacao",
      "label": "DtMovimentacao",
      "name": "DtMovimentacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PontosMilhagem",
      "label": "PontosMilhagem",
      "name": "PontosMilhagem",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Comentarios",
      "label": "Comentarios",
      "name": "Comentarios",
      "type": "string",
      "size": 80,
      "allowNull": false
    }
  ]
}