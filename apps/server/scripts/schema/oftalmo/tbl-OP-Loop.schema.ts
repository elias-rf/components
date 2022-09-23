import { TEntity } from "@er/types/*";

export const tbl_OP_Loop: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP_Loop",
  "fields": [
    {
      "field": "kOpLoop",
      "label": "kOpLoop",
      "name": "tbl_OP_Loop_id",
      "type": "string",
      "size": 8,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "QtdFilamentos",
      "label": "QtdFilamentos",
      "name": "QtdFilamentos",
      "type": "int",
      "size": 1,
      "defaultValue": "50"
    },
    {
      "field": "Espessura",
      "label": "Espessura",
      "name": "Espessura",
      "type": "float",
      "size": 4
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 1
    },
    {
      "field": "Tamanho",
      "label": "Tamanho",
      "name": "Tamanho",
      "type": "float",
      "size": 4
    },
    {
      "field": "Lote",
      "label": "Lote",
      "name": "Lote",
      "type": "string",
      "size": 50
    },
    {
      "field": "DataEmissao",
      "label": "DataEmissao",
      "name": "DataEmissao",
      "type": "date",
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
      "field": "IdAuxiliar",
      "label": "IdAuxiliar",
      "name": "IdAuxiliar",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "allowNull": false
    }
  ]
}