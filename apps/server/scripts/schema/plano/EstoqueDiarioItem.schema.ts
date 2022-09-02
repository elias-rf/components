import { TEntity } from "@er/types/*";

export const EstoqueDiarioItem: TEntity =
  {
  "database": "plano",
  "table": "EstoqueDiarioItem",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumSerieECF",
      "label": "NumSerieECF",
      "name": "NumSerieECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DescricaoProduto",
      "label": "DescricaoProduto",
      "name": "DescricaoProduto",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "UnidadeProduto",
      "label": "UnidadeProduto",
      "name": "UnidadeProduto",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ControleNum",
      "label": "ControleNum",
      "name": "ControleNum",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "ControleData",
      "label": "ControleData",
      "name": "ControleData",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CodigoNCM",
      "label": "CodigoNCM",
      "name": "CodigoNCM",
      "type": "string",
      "size": 16
    },
    {
      "field": "CEST",
      "label": "CEST",
      "name": "CEST",
      "type": "int",
      "size": 5
    }
  ]
}
