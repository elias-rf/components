import { TEntity } from "@er/types/*";

export const GrupoFornecedores: TEntity =
  {
  "database": "plano",
  "table": "GrupoFornecedores",
  "fields": [
    {
      "field": "CdGrupo",
      "label": "CdGrupo",
      "name": "GrupoFornecedores_id",
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
    }
  ]
}