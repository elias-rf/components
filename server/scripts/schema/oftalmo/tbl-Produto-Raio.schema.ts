import { TEntity } from "@er/types/*";

export const tbl_Produto_Raio: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Produto_Raio",
  "fields": [
    {
      "field": "fkproduto",
      "label": "fkproduto",
      "name": "fkproduto",
      "type": "int",
      "size": 4,
      "allowNull": false
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
      "field": "Dioptria",
      "label": "Dioptria",
      "name": "Dioptria",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Raio1",
      "label": "Raio1",
      "name": "Raio1",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Raio2",
      "label": "Raio2",
      "name": "Raio2",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Espessura",
      "label": "Espessura",
      "name": "Espessura",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "BFLMin",
      "label": "BFLMin",
      "name": "BFLMin",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "BFL",
      "label": "BFL",
      "name": "BFL",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "BFLMax",
      "label": "BFLMax",
      "name": "BFLMax",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "EspessuraMin",
      "label": "EspessuraMin",
      "name": "EspessuraMin",
      "type": "float",
      "size": 8
    },
    {
      "field": "EspessuraMax",
      "label": "EspessuraMax",
      "name": "EspessuraMax",
      "type": "float",
      "size": 8
    }
  ]
}
