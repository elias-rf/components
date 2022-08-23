import { TEntity } from "@er/types/*";

export const tbl_Funcionario: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Funcionario",
  "fields": [
    {
      "field": "kFuncionario",
      "label": "kFuncionario",
      "name": "tbl_Funcionario_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "FKEmpresa",
      "label": "FKEmpresa",
      "name": "FKEmpresa",
      "type": "int",
      "size": 4
    },
    {
      "field": "NomeFuncionario",
      "label": "NomeFuncionario",
      "name": "NomeFuncionario",
      "type": "string",
      "size": 150
    },
    {
      "field": "IDN",
      "label": "IDN",
      "name": "IDN",
      "type": "string",
      "size": 20
    },
    {
      "field": "Funcao",
      "label": "Funcao",
      "name": "Funcao",
      "type": "string",
      "size": 50
    },
    {
      "field": "Afastado",
      "label": "Afastado",
      "name": "Afastado",
      "type": "int",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Setor",
      "label": "Setor",
      "name": "Setor",
      "type": "string",
      "size": 30
    }
  ]
}
