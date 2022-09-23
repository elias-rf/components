import { TEntity } from "@er/types/*";

export const tbl_OP_Botao_Operacao: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP_Botao_Operacao",
  "fields": [
    {
      "field": "kOPBotaoItem",
      "label": "kOPBotaoItem",
      "name": "tbl_OP_Botao_Operacao_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkOPBotao",
      "label": "fkOPBotao",
      "name": "fkOPBotao",
      "type": "string",
      "size": 8,
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
      "defaultValue": "0"
    },
    {
      "field": "DataInicial",
      "label": "DataInicial",
      "name": "DataInicial",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Rejeitos",
      "label": "Rejeitos",
      "name": "Rejeitos",
      "type": "int",
      "size": 4,
      "defaultValue": "0"
    },
    {
      "field": "QtdFinal",
      "label": "QtdFinal",
      "name": "QtdFinal",
      "type": "int",
      "size": 4,
      "defaultValue": "0"
    },
    {
      "field": "fkFuncionario",
      "label": "fkFuncionario",
      "name": "fkFuncionario",
      "type": "int",
      "size": 4
    }
  ]
}