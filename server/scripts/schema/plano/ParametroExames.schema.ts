import { TEntity } from "@er/types/*";

export const ParametroExames: TEntity =
  {
  "database": "plano",
  "table": "ParametroExames",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "string",
      "size": 15
    },
    {
      "field": "data",
      "label": "data",
      "name": "data",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "hora",
      "label": "hora",
      "name": "hora",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    },
    {
      "field": "CdExame",
      "label": "CdExame",
      "name": "CdExame",
      "type": "string",
      "size": 8
    },
    {
      "field": "P_A_S",
      "label": "P_A_S",
      "name": "P_A_S",
      "type": "string",
      "size": 5
    },
    {
      "field": "P_A_D",
      "label": "P_A_D",
      "name": "P_A_D",
      "type": "string",
      "size": 5
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 5
    },
    {
      "field": "Laudo",
      "label": "Laudo",
      "name": "Laudo",
      "type": "string",
      "size": 1024
    },
    {
      "field": "OpGrid",
      "label": "OpGrid",
      "name": "OpGrid",
      "type": "string",
      "size": 1
    }
  ]
}
