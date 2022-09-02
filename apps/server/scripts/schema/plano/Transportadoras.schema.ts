import { TEntity } from "@er/types/*";

export const Transportadoras: TEntity =
  {
  "database": "plano",
  "table": "Transportadoras",
  "fields": [
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "nvarchar",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "CdTransportadora",
      "label": "CdTransportadora",
      "name": "CdTransportadora",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CEP",
      "label": "CEP",
      "name": "CEP",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CGC",
      "label": "CGC",
      "name": "CGC",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "nvarchar",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "nvarchar",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "nvarchar",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "InscEst",
      "label": "InscEst",
      "name": "InscEst",
      "type": "nvarchar",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "NmContato",
      "label": "NmContato",
      "name": "NmContato",
      "type": "nvarchar",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "RzSocial",
      "label": "RzSocial",
      "name": "RzSocial",
      "type": "nvarchar",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "nvarchar",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "UF",
      "label": "UF",
      "name": "UF",
      "type": "nvarchar",
      "size": 2,
      "allowNull": false
    }
  ]
}
