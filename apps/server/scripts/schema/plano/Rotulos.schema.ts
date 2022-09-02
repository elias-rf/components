import { TEntity } from "@er/types/*";

export const Rotulos: TEntity =
  {
  "database": "plano",
  "table": "Rotulos",
  "fields": [
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdRotulo",
      "label": "CdRotulo",
      "name": "CdRotulo",
      "type": "int",
      "size": 4,
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
      "field": "Conteudo",
      "label": "Conteudo",
      "name": "Conteudo",
      "type": "string",
      "size": 1024
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16,
      "allowNull": false
    }
  ]
}
