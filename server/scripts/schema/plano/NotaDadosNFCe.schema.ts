import { TEntity } from "@er/types/*";

export const NotaDadosNFCe: TEntity =
  {
  "database": "plano",
  "table": "NotaDadosNFCe",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "CPFCNPJDestinatario",
      "label": "CPFCNPJDestinatario",
      "name": "CPFCNPJDestinatario",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NomeDestinatario",
      "label": "NomeDestinatario",
      "name": "NomeDestinatario",
      "type": "string",
      "size": 70,
      "allowNull": false
    },
    {
      "field": "EmailDestinatario",
      "label": "EmailDestinatario",
      "name": "EmailDestinatario",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 60,
      "allowNull": false
    },
    {
      "field": "NumEndereco",
      "label": "NumEndereco",
      "name": "NumEndereco",
      "type": "string",
      "size": 12,
      "allowNull": false
    },
    {
      "field": "Complemento",
      "label": "Complemento",
      "name": "Complemento",
      "type": "string",
      "size": 60,
      "allowNull": false
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 60,
      "allowNull": false
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 60,
      "allowNull": false
    },
    {
      "field": "CdCidade",
      "label": "CdCidade",
      "name": "CdCidade",
      "type": "string",
      "size": 7,
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
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 14,
      "allowNull": false
    }
  ]
}
