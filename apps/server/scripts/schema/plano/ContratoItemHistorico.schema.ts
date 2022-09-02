import { TEntity } from "@er/types/*";

export const ContratoItemHistorico: TEntity =
  {
  "database": "plano",
  "table": "ContratoItemHistorico",
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
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DiaContrato",
      "label": "DiaContrato",
      "name": "DiaContrato",
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
      "field": "DtEvento",
      "label": "DtEvento",
      "name": "DtEvento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Evento",
      "label": "Evento",
      "name": "Evento",
      "type": "string",
      "size": 256,
      "allowNull": false
    }
  ]
}
