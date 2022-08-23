import { TEntity } from "@er/types/*";

export const AssocFornecedor: TEntity =
  {
  "database": "plano",
  "table": "AssocFornecedor",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdReferencia",
      "label": "CdReferencia",
      "name": "CdReferencia",
      "type": "string",
      "size": 32
    },
    {
      "field": "QtdEmbalagem",
      "label": "QtdEmbalagem",
      "name": "QtdEmbalagem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtPriCompra",
      "label": "DtPriCompra",
      "name": "DtPriCompra",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltCompra",
      "label": "DtUltCompra",
      "name": "DtUltCompra",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NroNf",
      "label": "NroNf",
      "name": "NroNf",
      "type": "int",
      "size": 4
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3
    }
  ]
}
