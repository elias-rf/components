import { TEntity } from "@er/types/*";

export const tbl_Sistema_Proprietario: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Sistema_Proprietario",
  "fields": [
    {
      "field": "NomeEmpresa",
      "label": "NomeEmpresa",
      "name": "tbl_Sistema_Proprietario_id",
      "type": "string",
      "size": 50,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "KEmpresa",
      "label": "KEmpresa",
      "name": "KEmpresa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "SiglaEmpresa",
      "label": "SiglaEmpresa",
      "name": "SiglaEmpresa",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "RazaoSocial",
      "label": "RazaoSocial",
      "name": "RazaoSocial",
      "type": "string",
      "size": 150,
      "allowNull": false
    },
    {
      "field": "NomeFantasia",
      "label": "NomeFantasia",
      "name": "NomeFantasia",
      "type": "string",
      "size": 150,
      "allowNull": false
    },
    {
      "field": "Contato",
      "label": "Contato",
      "name": "Contato",
      "type": "string",
      "size": 150,
      "allowNull": false
    },
    {
      "field": "CGC",
      "label": "CGC",
      "name": "CGC",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "InscEstadual",
      "label": "InscEstadual",
      "name": "InscEstadual",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 80,
      "allowNull": false
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "Estado",
      "label": "Estado",
      "name": "Estado",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "CEP",
      "label": "CEP",
      "name": "CEP",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "Pais",
      "label": "Pais",
      "name": "Pais",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "Proprietaria",
      "label": "Proprietaria",
      "name": "Proprietaria",
      "type": "int",
      "size": 1
    },
    {
      "field": "ICMS",
      "label": "ICMS",
      "name": "ICMS",
      "type": "int",
      "size": 1
    },
    {
      "field": "Web",
      "label": "Web",
      "name": "Web",
      "type": "string",
      "size": 50
    }
  ]
}
