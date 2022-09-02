import { TEntity } from "@er/types/*";

export const tbl_OP: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP",
  "fields": [
    {
      "field": "kOP",
      "label": "kOP",
      "name": "tbl_OP_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkOPBotao",
      "label": "fkOPBotao",
      "name": "fkOPBotao",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkOPLoop",
      "label": "fkOPLoop",
      "name": "fkOPLoop",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkOPPai",
      "label": "fkOPPai",
      "name": "fkOPPai",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkTipoOP",
      "label": "fkTipoOP",
      "name": "fkTipoOP",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataEmissao",
      "label": "DataEmissao",
      "name": "DataEmissao",
      "type": "date",
      "size": 4
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "EmProcesso",
      "label": "EmProcesso",
      "name": "EmProcesso",
      "type": "int",
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
    },
    {
      "field": "NomeUsuario",
      "label": "NomeUsuario",
      "name": "NomeUsuario",
      "type": "string",
      "size": 50
    },
    {
      "field": "Obs",
      "label": "Obs",
      "name": "Obs",
      "type": "string",
      "size": 250
    },
    {
      "field": "fkProdutoItem",
      "label": "fkProdutoItem",
      "name": "fkProdutoItem",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Broca",
      "label": "Broca",
      "name": "Broca",
      "type": "float",
      "size": 4
    }
  ]
}
