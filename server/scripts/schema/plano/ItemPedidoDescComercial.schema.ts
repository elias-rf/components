import { TEntity } from "@er/types/*";

export const ItemPedidoDescComercial: TEntity =
  {
  "database": "plano",
  "table": "ItemPedidoDescComercial",
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
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 18,
      "allowNull": false
    },
    {
      "field": "PercRepasseComercial",
      "label": "PercRepasseComercial",
      "name": "PercRepasseComercial",
      "type": "int",
      "size": 5,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlRepasseComercial",
      "label": "VlRepasseComercial",
      "name": "VlRepasseComercial",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercDescontoComercial",
      "label": "PercDescontoComercial",
      "name": "PercDescontoComercial",
      "type": "int",
      "size": 5,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescontoComercial",
      "label": "VlDescontoComercial",
      "name": "VlDescontoComercial",
      "type": "int",
      "size": 5,
      "scale": 4,
      "allowNull": false
    }
  ]
}
