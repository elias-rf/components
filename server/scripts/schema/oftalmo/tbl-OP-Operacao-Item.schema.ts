import { TEntity } from "@er/types/*";

export const tbl_OP_Operacao_Item: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP_Operacao_Item",
  "fields": [
    {
      "field": "kOpLIOItem",
      "label": "kOpLIOItem",
      "name": "tbl_OP_Operacao_Item_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkOpLIO",
      "label": "fkOpLIO",
      "name": "fkOpLIO",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkOperacao",
      "label": "fkOperacao",
      "name": "fkOperacao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "QtdInicial",
      "label": "QtdInicial",
      "name": "QtdInicial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Rejeitos",
      "label": "Rejeitos",
      "name": "Rejeitos",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Retrabalho",
      "label": "Retrabalho",
      "name": "Retrabalho",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdFinal",
      "label": "QtdFinal",
      "name": "QtdFinal",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkFuncionario",
      "label": "fkFuncionario",
      "name": "fkFuncionario",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataOp",
      "label": "DataOp",
      "name": "DataOp",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "ViaFilha",
      "label": "ViaFilha",
      "name": "ViaFilha",
      "type": "float",
      "size": 4
    }
  ]
}
