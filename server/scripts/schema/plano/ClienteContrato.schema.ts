import { TEntity } from "@er/types/*";

export const ClienteContrato: TEntity =
  {
  "database": "plano",
  "table": "ClienteContrato",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "ClienteContrato_id",
      "type": "int",
      "size": 9,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DtEnvioTermo",
      "label": "DtEnvioTermo",
      "name": "DtEnvioTermo",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtRecebimentoTermo",
      "label": "DtRecebimentoTermo",
      "name": "DtRecebimentoTermo",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtEnvioContrato",
      "label": "DtEnvioContrato",
      "name": "DtEnvioContrato",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtRecebimentoContrato",
      "label": "DtRecebimentoContrato",
      "name": "DtRecebimentoContrato",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
