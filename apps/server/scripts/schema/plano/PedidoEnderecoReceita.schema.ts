import { TEntity } from "@er/types/*";

export const PedidoEnderecoReceita: TEntity =
  {
  "database": "plano",
  "table": "PedidoEnderecoReceita",
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
      "field": "EnderecoReceita",
      "label": "EnderecoReceita",
      "name": "EnderecoReceita",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DtBusca",
      "label": "DtBusca",
      "name": "DtBusca",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrInicial",
      "label": "HrInicial",
      "name": "HrInicial",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrFinal",
      "label": "HrFinal",
      "name": "HrFinal",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
