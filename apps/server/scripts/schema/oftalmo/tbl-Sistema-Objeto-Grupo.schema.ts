import { TEntity } from "@er/types/*";

export const tbl_Sistema_Objeto_Grupo: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Sistema_Objeto_Grupo",
  "fields": [
    {
      "field": "fkGrupo",
      "label": "fkGrupo",
      "name": "fkGrupo",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "fkObjeto",
      "label": "fkObjeto",
      "name": "fkObjeto",
      "type": "string",
      "size": 4,
      "allowNull": false
    }
  ]
}
