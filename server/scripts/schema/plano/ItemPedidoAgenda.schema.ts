import { TEntity } from "@er/types/*";

export const ItemPedidoAgenda: TEntity =
  {
  "database": "plano",
  "table": "ItemPedidoAgenda",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
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
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
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
      "field": "Posologia",
      "label": "Posologia",
      "name": "Posologia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MedidaDoses",
      "label": "MedidaDoses",
      "name": "MedidaDoses",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "NumDosesDia",
      "label": "NumDosesDia",
      "name": "NumDosesDia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtIniTratamento",
      "label": "DtIniTratamento",
      "name": "DtIniTratamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtProcessamento",
      "label": "DtProcessamento",
      "name": "DtProcessamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtUltContato",
      "label": "DtUltContato",
      "name": "DtUltContato",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtProxContato",
      "label": "DtProxContato",
      "name": "DtProxContato",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024,
      "allowNull": false
    }
  ]
}
