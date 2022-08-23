import { TEntity } from "@er/types/*";

export const tbl_OP_Botao: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP_Botao",
  "fields": [
    {
      "field": "kOPBotao",
      "label": "kOPBotao",
      "name": "tbl_OP_Botao_id",
      "type": "string",
      "size": 8,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Lote",
      "label": "Lote",
      "name": "Lote",
      "type": "string",
      "size": 50
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
      "size": 4
    },
    {
      "field": "Regulador",
      "label": "Regulador",
      "name": "Regulador",
      "type": "string",
      "size": 50
    },
    {
      "field": "DataRegulagem",
      "label": "DataRegulagem",
      "name": "DataRegulagem",
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
