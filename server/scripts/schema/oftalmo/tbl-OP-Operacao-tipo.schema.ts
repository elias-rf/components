import { TEntity } from "@er/types/*";

export const tbl_OP_Operacao_tipo: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP_Operacao_tipo",
  "fields": [
    {
      "field": "kOperacao",
      "label": "kOperacao",
      "name": "tbl_OP_Operacao_tipo_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "Grupo",
      "label": "Grupo",
      "name": "Grupo",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Ordem",
      "label": "Ordem",
      "name": "Ordem",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "ProxOP",
      "label": "ProxOP",
      "name": "ProxOP",
      "type": "int",
      "size": 2
    },
    {
      "field": "ProxOPPU",
      "label": "ProxOPPU",
      "name": "ProxOPPU",
      "type": "int",
      "size": 2
    },
    {
      "field": "ProxOPRet",
      "label": "ProxOPRet",
      "name": "ProxOPRet",
      "type": "int",
      "size": 2
    },
    {
      "field": "ehRetrabalho",
      "label": "ehRetrabalho",
      "name": "ehRetrabalho",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    }
  ]
}
