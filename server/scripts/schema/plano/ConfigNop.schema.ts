import { TEntity } from "@er/types/*";

export const ConfigNop: TEntity =
  {
  "database": "plano",
  "table": "ConfigNop",
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
      "field": "UF",
      "label": "UF",
      "name": "UF",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoOperacao",
      "label": "TipoOperacao",
      "name": "TipoOperacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoNota",
      "label": "TipoNota",
      "name": "TipoNota",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoCliente",
      "label": "TipoCliente",
      "name": "TipoCliente",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "OrigemMercadoria",
      "label": "OrigemMercadoria",
      "name": "OrigemMercadoria",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoICMS",
      "label": "TipoTributacaoICMS",
      "name": "TipoTributacaoICMS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoIPI",
      "label": "TipoTributacaoIPI",
      "name": "TipoTributacaoIPI",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoPIS",
      "label": "TipoTributacaoPIS",
      "name": "TipoTributacaoPIS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoCOFINS",
      "label": "TipoTributacaoCOFINS",
      "name": "TipoTributacaoCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 4,
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
      "field": "FinalidadeNota",
      "label": "FinalidadeNota",
      "name": "FinalidadeNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    }
  ]
}
