import { TEntity } from "@er/types/*";

export const TipoLIberacao: TEntity =
  {
  "database": "plano",
  "table": "TipoLIberacao",
  "fields": [
    {
      "field": "CdTipoLiberacao",
      "label": "CdTipoLiberacao",
      "name": "TipoLIberacao_id",
      "type": "int",
      "size": 9,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 32,
      "allowNull": false
    }
  ]
}
