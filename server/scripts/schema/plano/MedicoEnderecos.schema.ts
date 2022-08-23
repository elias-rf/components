import { TEntity } from "@er/types/*";

export const MedicoEnderecos: TEntity =
  {
  "database": "plano",
  "table": "MedicoEnderecos",
  "fields": [
    {
      "field": "Crm",
      "label": "Crm",
      "name": "Crm",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NmClinica",
      "label": "NmClinica",
      "name": "NmClinica",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "NumEndereco",
      "label": "NumEndereco",
      "name": "NumEndereco",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CompEndereco",
      "label": "CompEndereco",
      "name": "CompEndereco",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "Uf",
      "label": "Uf",
      "name": "Uf",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Cep",
      "label": "Cep",
      "name": "Cep",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
