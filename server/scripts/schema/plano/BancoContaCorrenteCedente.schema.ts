import { TEntity } from "@er/types/*";

export const BancoContaCorrenteCedente: TEntity =
  {
  "database": "plano",
  "table": "BancoContaCorrenteCedente",
  "fields": [
    {
      "field": "NumBanco",
      "label": "NumBanco",
      "name": "NumBanco",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumAgencia",
      "label": "NumAgencia",
      "name": "NumAgencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumContaCorrente",
      "label": "NumContaCorrente",
      "name": "NumContaCorrente",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "AgCodCedente",
      "label": "AgCodCedente",
      "name": "AgCodCedente",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NmCedente",
      "label": "NmCedente",
      "name": "NmCedente",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CNPJ",
      "label": "CNPJ",
      "name": "CNPJ",
      "type": "int",
      "size": 9,
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
      "field": "Numero",
      "label": "Numero",
      "name": "Numero",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Complemento",
      "label": "Complemento",
      "name": "Complemento",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "UF",
      "label": "UF",
      "name": "UF",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CEP",
      "label": "CEP",
      "name": "CEP",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "string",
      "size": 32,
      "allowNull": false
    }
  ]
}
