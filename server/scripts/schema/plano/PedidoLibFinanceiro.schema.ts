import { TEntity } from "@er/types/*";

export const PedidoLibFinanceiro: TEntity =
  {
  "database": "plano",
  "table": "PedidoLibFinanceiro",
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
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlLiberado",
      "label": "VlLiberado",
      "name": "VlLiberado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioConf",
      "label": "UsuarioConf",
      "name": "UsuarioConf",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "DataConf",
      "label": "DataConf",
      "name": "DataConf",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
