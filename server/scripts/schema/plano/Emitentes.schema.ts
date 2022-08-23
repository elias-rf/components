import { TEntity } from "@er/types/*";

export const Emitentes: TEntity =
  {
  "database": "plano",
  "table": "Emitentes",
  "fields": [
    {
      "field": "CdTipoEmitente",
      "label": "CdTipoEmitente",
      "name": "CdTipoEmitente",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdEmitente",
      "label": "CdEmitente",
      "name": "CdEmitente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "RzSocial",
      "label": "RzSocial",
      "name": "RzSocial",
      "type": "string",
      "size": 70
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 70
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 30
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 40
    },
    {
      "field": "Uf",
      "label": "Uf",
      "name": "Uf",
      "type": "string",
      "size": 2
    },
    {
      "field": "Cep",
      "label": "Cep",
      "name": "Cep",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Cgc",
      "label": "Cgc",
      "name": "Cgc",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "InscEst",
      "label": "InscEst",
      "name": "InscEst",
      "type": "string",
      "size": 15
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 15
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "string",
      "size": 15
    },
    {
      "field": "NmContato",
      "label": "NmContato",
      "name": "NmContato",
      "type": "string",
      "size": 40
    },
    {
      "field": "PercComissao",
      "label": "PercComissao",
      "name": "PercComissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAcertoParcial",
      "label": "FgAcertoParcial",
      "name": "FgAcertoParcial",
      "type": "string",
      "size": 1
    },
    {
      "field": "NmFantasia",
      "label": "NmFantasia",
      "name": "NmFantasia",
      "type": "string",
      "size": 64
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 128
    },
    {
      "field": "EmailNfe",
      "label": "EmailNfe",
      "name": "EmailNfe",
      "type": "string",
      "size": 128
    }
  ]
}
