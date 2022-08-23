import { TEntity } from "@er/types/*";

export const PharmaLinkItemPedido: TEntity =
  {
  "database": "plano",
  "table": "PharmaLinkItemPedido",
  "fields": [
    {
      "field": "NumAutorizacao",
      "label": "NumAutorizacao",
      "name": "NumAutorizacao",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdProdutoPharmaLink",
      "label": "CdProdutoPharmaLink",
      "name": "CdProdutoPharmaLink",
      "type": "string",
      "size": 16,
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
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "VlBruto",
      "label": "VlBruto",
      "name": "VlBruto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlLoja",
      "label": "VlLoja",
      "name": "VlLoja",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPharmaLink",
      "label": "VlPharmaLink",
      "name": "VlPharmaLink",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlReceberLoja",
      "label": "VlReceberLoja",
      "name": "VlReceberLoja",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Desconto",
      "label": "Desconto",
      "name": "Desconto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtRetorno",
      "label": "DtRetorno",
      "name": "DtRetorno",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdStatus",
      "label": "CdStatus",
      "name": "CdStatus",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}
