import { TEntity } from "@er/types/*";

export const FilialContador: TEntity =
  {
  "database": "plano",
  "table": "FilialContador",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "FilialContador_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmContador",
      "label": "NmContador",
      "name": "NmContador",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "NumCRC",
      "label": "NumCRC",
      "name": "NumCRC",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CPF",
      "label": "CPF",
      "name": "CPF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CNPJ",
      "label": "CNPJ",
      "name": "CNPJ",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "NumEndereco",
      "label": "NumEndereco",
      "name": "NumEndereco",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CompEndereco",
      "label": "CompEndereco",
      "name": "CompEndereco",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CdCidade",
      "label": "CdCidade",
      "name": "CdCidade",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NmCidade",
      "label": "NmCidade",
      "name": "NmCidade",
      "type": "string",
      "size": 64,
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
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "EmailProcNfe",
      "label": "EmailProcNfe",
      "name": "EmailProcNfe",
      "type": "string",
      "size": 128
    }
  ]
}
