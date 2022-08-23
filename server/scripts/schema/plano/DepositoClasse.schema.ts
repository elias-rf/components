import { TEntity } from "@er/types/*";

export const DepositoClasse: TEntity =
  {
  "database": "plano",
  "table": "DepositoClasse",
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
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "string",
      "size": 12,
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
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumContaClasse",
      "label": "NumContaClasse",
      "name": "NumContaClasse",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Percentual",
      "label": "Percentual",
      "name": "Percentual",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    }
  ]
}
