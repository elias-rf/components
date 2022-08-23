import { TEntity } from "@er/types/*";

export const tbl_Seguranca_Permissao_Usuario: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Seguranca_Permissao_Usuario",
  "fields": [
    {
      "field": "kPermissao",
      "label": "kPermissao",
      "name": "kPermissao",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "allowNull": false
    },
    {
      "field": "fkObjeto",
      "label": "fkObjeto",
      "name": "fkObjeto",
      "type": "string",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkUsuario",
      "label": "fkUsuario",
      "name": "fkUsuario",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Permissao",
      "label": "Permissao",
      "name": "Permissao",
      "type": "int",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "actions",
      "label": "actions",
      "name": "actions",
      "type": "string",
      "size": 200
    }
  ]
}
