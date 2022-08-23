import { TEntity } from "@er/types/*";

export const DiasSemEstoque: TEntity =
  {
  "database": "plano",
  "table": "DiasSemEstoque",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "DtInicioFalta",
      "label": "DtInicioFalta",
      "name": "DtInicioFalta",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtReposicao",
      "label": "DtReposicao",
      "name": "DtReposicao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
