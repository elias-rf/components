import { TEntity } from "@er/types/*";

export const tbl_OP_LIO: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP_LIO",
  "fields": [
    {
      "field": "kOpLIO",
      "label": "kOpLIO",
      "name": "tbl_OP_LIO_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkOpBotao",
      "label": "fkOpBotao",
      "name": "fkOpBotao",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "kVia",
      "label": "kVia",
      "name": "kVia",
      "type": "float",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkOpLoop",
      "label": "fkOpLoop",
      "name": "fkOpLoop",
      "type": "string",
      "size": 8
    },
    {
      "field": "NomeUsuario",
      "label": "NomeUsuario",
      "name": "NomeUsuario",
      "type": "string",
      "size": 50
    },
    {
      "field": "DataEmissao",
      "label": "DataEmissao",
      "name": "DataEmissao",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Obs",
      "label": "Obs",
      "name": "Obs",
      "type": "string",
      "size": 300
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkOperacaoProcesso",
      "label": "fkOperacaoProcesso",
      "name": "fkOperacaoProcesso",
      "type": "int",
      "size": 2
    },
    {
      "field": "QtdProcesso",
      "label": "QtdProcesso",
      "name": "QtdProcesso",
      "type": "int",
      "size": 4,
      "defaultValue": "0"
    },
    {
      "field": "fkprodutoitem",
      "label": "fkprodutoitem",
      "name": "fkprodutoitem",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Profundidade",
      "label": "Profundidade",
      "name": "Profundidade",
      "type": "float",
      "size": 4
    },
    {
      "field": "Broca",
      "label": "Broca",
      "name": "Broca",
      "type": "float",
      "size": 4
    },
    {
      "field": "Travado",
      "label": "Travado",
      "name": "Travado",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    }
  ]
}
