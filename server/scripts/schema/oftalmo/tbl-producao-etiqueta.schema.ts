import { TEntity } from "@er/types/*";

export const tbl_producao_etiqueta: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_producao_etiqueta",
  "fields": [
    {
      "field": "NumControle",
      "label": "NumControle",
      "name": "tbl_producao_etiqueta_id",
      "type": "string",
      "size": 18,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkProdutoItem",
      "label": "fkProdutoItem",
      "name": "fkProdutoItem",
      "type": "int",
      "size": 4
    },
    {
      "field": "DataInsercao",
      "label": "DataInsercao",
      "name": "DataInsercao",
      "type": "date",
      "size": 4
    }
  ]
}
