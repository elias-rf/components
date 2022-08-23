import { TEntity } from "@er/types/*";

export const PedidoPagamentoCartao: TEntity =
  {
  "database": "plano",
  "table": "PedidoPagamentoCartao",
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
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdAdministradora",
      "label": "CdAdministradora",
      "name": "CdAdministradora",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "VlCartao",
      "label": "VlCartao",
      "name": "VlCartao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumParcelas",
      "label": "NumParcelas",
      "name": "NumParcelas",
      "type": "int",
      "size": 5,
      "allowNull": false
    }
  ]
}
