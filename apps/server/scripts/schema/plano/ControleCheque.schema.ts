import { TEntity } from "@er/types/*";

export const ControleCheque: TEntity =
  {
  "database": "plano",
  "table": "ControleCheque",
  "fields": [
    {
      "field": "CdControleCheque",
      "label": "CdControleCheque",
      "name": "ControleCheque_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NrConta",
      "label": "NrConta",
      "name": "NrConta",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "NrCheque",
      "label": "NrCheque",
      "name": "NrCheque",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "NmEmitente",
      "label": "NmEmitente",
      "name": "NmEmitente",
      "type": "string",
      "size": 80,
      "allowNull": false
    },
    {
      "field": "Valor",
      "label": "Valor",
      "name": "Valor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdStatus",
      "label": "CdStatus",
      "name": "CdStatus",
      "type": "string",
      "size": 1,
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
      "field": "Numdoc",
      "label": "Numdoc",
      "name": "Numdoc",
      "type": "int",
      "size": 4
    },
    {
      "field": "SeqDoc",
      "label": "SeqDoc",
      "name": "SeqDoc",
      "type": "int",
      "size": 2
    }
  ]
}