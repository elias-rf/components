import { TEntity } from "@er/types/*";

export const ControladosPedido: TEntity =
  {
  "database": "plano",
  "table": "ControladosPedido",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumDocumento",
      "label": "NumDocumento",
      "name": "NumDocumento",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdePrescrita",
      "label": "QtdePrescrita",
      "name": "QtdePrescrita",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdeVendida",
      "label": "QtdeVendida",
      "name": "QtdeVendida",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtReceita",
      "label": "DtReceita",
      "name": "DtReceita",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumReceita",
      "label": "NumReceita",
      "name": "NumReceita",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdComprador",
      "label": "CdComprador",
      "name": "CdComprador",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NomeComprador",
      "label": "NomeComprador",
      "name": "NomeComprador",
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
      "field": "NumIdentidade",
      "label": "NumIdentidade",
      "name": "NumIdentidade",
      "type": "string",
      "size": 20
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20
    },
    {
      "field": "TipoReceita",
      "label": "TipoReceita",
      "name": "TipoReceita",
      "type": "string",
      "size": 2
    }
  ]
}