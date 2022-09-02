import { TEntity } from "@er/types/*";

export const PedidoPagamentoFinanciamento: TEntity =
  {
  "database": "plano",
  "table": "PedidoPagamentoFinanciamento",
  "fields": [
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
      "field": "CdFinanceira",
      "label": "CdFinanceira",
      "name": "CdFinanceira",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumParcelas",
      "label": "NumParcelas",
      "name": "NumParcelas",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "VlParcela",
      "label": "VlParcela",
      "name": "VlParcela",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAtualizacao",
      "label": "DtUltAtualizacao",
      "name": "DtUltAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
