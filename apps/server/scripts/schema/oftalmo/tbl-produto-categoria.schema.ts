import { TEntity } from "@er/types/*";

export const tbl_produto_categoria: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_produto_categoria",
  "fields": [
    {
      "field": "kCategoria",
      "label": "kCategoria",
      "name": "tbl_produto_categoria_id",
      "type": "string",
      "size": 50,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 150
    },
    {
      "field": "Flag",
      "label": "Flag",
      "name": "Flag",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Controlado",
      "label": "Controlado",
      "name": "Controlado",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "1"
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "fkCategoriaTipo",
      "label": "fkCategoriaTipo",
      "name": "fkCategoriaTipo",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EhObjetivoVenda",
      "label": "EhObjetivoVenda",
      "name": "EhObjetivoVenda",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "CategoriaComercial",
      "label": "CategoriaComercial",
      "name": "CategoriaComercial",
      "type": "string",
      "size": 50
    }
  ]
}
