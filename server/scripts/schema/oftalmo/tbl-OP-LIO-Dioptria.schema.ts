import { TEntity } from "@er/types/*";

export const tbl_OP_LIO_Dioptria: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_OP_LIO_Dioptria",
  "fields": [
    {
      "field": "kOpLIODioptria",
      "label": "kOpLIODioptria",
      "name": "tbl_OP_LIO_Dioptria_id",
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
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "Dioptria",
      "label": "Dioptria",
      "name": "Dioptria",
      "type": "float",
      "size": 4
    },
    {
      "field": "Controle",
      "label": "Controle",
      "name": "Controle",
      "type": "string",
      "size": 11
    },
    {
      "field": "Esterilizacao",
      "label": "Esterilizacao",
      "name": "Esterilizacao",
      "type": "string",
      "size": 4
    },
    {
      "field": "fkprodutoitem",
      "label": "fkprodutoitem",
      "name": "fkprodutoitem",
      "type": "int",
      "size": 4
    },
    {
      "field": "DataFabricacao",
      "label": "DataFabricacao",
      "name": "DataFabricacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Partida",
      "label": "Partida",
      "name": "Partida",
      "type": "int",
      "size": 1
    },
    {
      "field": "QtdProduzida",
      "label": "QtdProduzida",
      "name": "QtdProduzida",
      "type": "int",
      "size": 4
    }
  ]
}
