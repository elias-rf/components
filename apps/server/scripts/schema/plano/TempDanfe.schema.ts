import { TEntity } from "@er/types/*";

export const TempDanfe: TEntity =
  {
  "database": "plano",
  "table": "TempDanfe",
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
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 9,
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
      "field": "SequenciaNota",
      "label": "SequenciaNota",
      "name": "SequenciaNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
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
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "NCM",
      "label": "NCM",
      "name": "NCM",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CST",
      "label": "CST",
      "name": "CST",
      "type": "string",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CFOP",
      "label": "CFOP",
      "name": "CFOP",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
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
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlTotalItem",
      "label": "VlTotalItem",
      "name": "VlTotalItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "VlICMS",
      "label": "VlICMS",
      "name": "VlICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaIPI",
      "label": "AliquotaIPI",
      "name": "AliquotaIPI",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "VlIPI",
      "label": "VlIPI",
      "name": "VlIPI",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAproximadoImpostoItem",
      "label": "VlAproximadoImpostoItem",
      "name": "VlAproximadoImpostoItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBrutoItem",
      "label": "VlBrutoItem",
      "name": "VlBrutoItem",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}