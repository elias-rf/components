import { TEntity } from "@er/types/*";

export const tbl_Seguranca_Grupo: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Seguranca_Grupo",
  "fields": [
    {
      "field": "kGrupo",
      "label": "kGrupo",
      "name": "tbl_Seguranca_Grupo_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NomeGrupo",
      "label": "NomeGrupo",
      "name": "NomeGrupo",
      "type": "string",
      "size": 50
    }
  ]
}
