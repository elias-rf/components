import { TEntity } from "@er/types/*";

export const ProdutosIndisponiveis: TEntity =
  {
  "database": "plano",
  "table": "ProdutosIndisponiveis",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NumLote",
      "label": "NumLote",
      "name": "NumLote",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "FgStatus",
      "label": "FgStatus",
      "name": "FgStatus",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgMotivo",
      "label": "FgMotivo",
      "name": "FgMotivo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "DtLcto",
      "label": "DtLcto",
      "name": "DtLcto",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}