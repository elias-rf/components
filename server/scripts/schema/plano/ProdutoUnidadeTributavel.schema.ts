import { TEntity } from "@er/types/*";

export const ProdutoUnidadeTributavel: TEntity =
  {
  "database": "plano",
  "table": "ProdutoUnidadeTributavel",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 18,
      "allowNull": false
    },
    {
      "field": "UnidadeTributavel",
      "label": "UnidadeTributavel",
      "name": "UnidadeTributavel",
      "type": "string",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdeComercial",
      "label": "QtdeComercial",
      "name": "QtdeComercial",
      "type": "int",
      "size": 5,
      "scale": 5,
      "allowNull": false
    },
    {
      "field": "QtdeTributavel",
      "label": "QtdeTributavel",
      "name": "QtdeTributavel",
      "type": "int",
      "size": 5,
      "scale": 5,
      "allowNull": false
    }
  ]
}
