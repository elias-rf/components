import { TEntity } from "@er/types/*";

export const LancCaixa: TEntity =
  {
  "database": "plano",
  "table": "LancCaixa",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 4
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
      "size": 4,
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
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "CdTpAplicacao",
      "label": "CdTpAplicacao",
      "name": "CdTpAplicacao",
      "type": "int",
      "size": 2
    },
    {
      "field": "VlValor",
      "label": "VlValor",
      "name": "VlValor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TxFinalidade",
      "label": "TxFinalidade",
      "name": "TxFinalidade",
      "type": "string",
      "size": 90
    },
    {
      "field": "TxTipLcto",
      "label": "TxTipLcto",
      "name": "TxTipLcto",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4
    },
    {
      "field": "CodFor",
      "label": "CodFor",
      "name": "CodFor",
      "type": "int",
      "size": 4
    },
    {
      "field": "SeqDoc",
      "label": "SeqDoc",
      "name": "SeqDoc",
      "type": "int",
      "size": 2
    }
  ]
}
