import { TEntity } from "@er/types/*";

export const ArqDupPagamentos: TEntity =
  {
  "database": "plano",
  "table": "ArqDupPagamentos",
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Numdoc",
      "label": "Numdoc",
      "name": "Numdoc",
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
      "field": "SeqDoc",
      "label": "SeqDoc",
      "name": "SeqDoc",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtPagamento",
      "label": "DtPagamento",
      "name": "DtPagamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "SequenciaPgto",
      "label": "SequenciaPgto",
      "name": "SequenciaPgto",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlAmortizado",
      "label": "VlAmortizado",
      "name": "VlAmortizado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlJuros",
      "label": "VlJuros",
      "name": "VlJuros",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoPgto",
      "label": "TipoPgto",
      "name": "TipoPgto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumConta",
      "label": "NumConta",
      "name": "NumConta",
      "type": "string",
      "size": 12,
      "allowNull": false
    },
    {
      "field": "NumCheque",
      "label": "NumCheque",
      "name": "NumCheque",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumLcto",
      "label": "NumLcto",
      "name": "NumLcto",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdUsuario",
      "label": "CdUsuario",
      "name": "CdUsuario",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    }
  ]
}
