import { TEntity } from "@er/types/*";

export const CadCliOcorrencias: TEntity =
  {
  "database": "plano",
  "table": "CadCliOcorrencias",
  "fields": [
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
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Ocorrencia",
      "label": "Ocorrencia",
      "name": "Ocorrencia",
      "type": "string",
      "size": 1024
    },
    {
      "field": "CdUsuario",
      "label": "CdUsuario",
      "name": "CdUsuario",
      "type": "string",
      "size": 10
    },
    {
      "field": "TpOcorrencia",
      "label": "TpOcorrencia",
      "name": "TpOcorrencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExibePreVenda",
      "label": "FgExibePreVenda",
      "name": "FgExibePreVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 9
    }
  ]
}
