import { TEntity } from "@er/types/*";

export const PedidoOrdemConferencia: TEntity =
  {
  "database": "plano",
  "table": "PedidoOrdemConferencia",
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
      "field": "NumOrdemFaturamento",
      "label": "NumOrdemFaturamento",
      "name": "NumOrdemFaturamento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
