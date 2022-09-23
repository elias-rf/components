import { TEntity } from "@er/types/*";

export const Deposito: TEntity =
  {
  "database": "plano",
  "table": "Deposito",
  "fields": [
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumConta",
      "label": "NumConta",
      "name": "NumConta",
      "type": "string",
      "size": 12,
      "allowNull": false
    },
    {
      "field": "DtDeposito",
      "label": "DtDeposito",
      "name": "DtDeposito",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "SeqDep",
      "label": "SeqDep",
      "name": "SeqDep",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Finalidade",
      "label": "Finalidade",
      "name": "Finalidade",
      "type": "string",
      "size": 1024
    },
    {
      "field": "VlDinheiro",
      "label": "VlDinheiro",
      "name": "VlDinheiro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlChequePraca",
      "label": "VlChequePraca",
      "name": "VlChequePraca",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlChequeOutros",
      "label": "VlChequeOutros",
      "name": "VlChequeOutros",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdFilialAssociada",
      "label": "CdFilialAssociada",
      "name": "CdFilialAssociada",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    }
  ]
}