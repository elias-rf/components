import { TEntity } from "@er/types/*";

export const SubGrupoProdutos: TEntity =
  {
  "database": "plano",
  "table": "SubGrupoProdutos",
  "fields": [
    {
      "field": "CdSubGrupo",
      "label": "CdSubGrupo",
      "name": "SubGrupoProdutos_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 25
    },
    {
      "field": "FgListaPreco",
      "label": "FgListaPreco",
      "name": "FgListaPreco",
      "type": "string",
      "size": 1
    }
  ]
}
