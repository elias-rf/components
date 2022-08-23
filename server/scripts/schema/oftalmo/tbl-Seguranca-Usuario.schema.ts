import { TEntity } from "@er/types/*";

export const tbl_Seguranca_Usuario: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Seguranca_Usuario",
  "fields": [
    {
      "field": "kUsuario",
      "label": "kUsuario",
      "name": "tbl_Seguranca_Usuario_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NomeUsuario",
      "label": "NomeUsuario",
      "name": "NomeUsuario",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "Senha",
      "label": "Senha",
      "name": "Senha",
      "type": "string",
      "size": 50
    },
    {
      "field": "fkGrupo",
      "label": "fkGrupo",
      "name": "fkGrupo",
      "type": "int",
      "size": 4
    },
    {
      "field": "email",
      "label": "email",
      "name": "email",
      "type": "string",
      "size": 50
    },
    {
      "field": "fkFuncionario",
      "label": "fkFuncionario",
      "name": "fkFuncionario",
      "type": "int",
      "size": 4
    },
    {
      "field": "Ativo",
      "label": "Ativo",
      "name": "Ativo",
      "type": "int",
      "size": 1,
      "defaultValue": "1"
    },
    {
      "field": "hash",
      "label": "hash",
      "name": "hash",
      "type": "string",
      "size": 255
    },
    {
      "field": "nome",
      "label": "nome",
      "name": "nome",
      "type": "string",
      "size": 200
    },
    {
      "field": "setor",
      "label": "setor",
      "name": "setor",
      "type": "string",
      "size": 50
    },
    {
      "field": "nivel",
      "label": "nivel",
      "name": "nivel",
      "type": "int",
      "size": 4
    },
    {
      "field": "idGroup",
      "label": "idGroup",
      "name": "idGroup",
      "type": "string",
      "size": 50
    }
  ]
}
