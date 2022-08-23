import { TEntity } from "@er/types/*";

export const MestreLancTransporte: TEntity =
  {
  "database": "plano",
  "table": "MestreLancTransporte",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4,
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtAquisicao",
      "label": "DtAquisicao",
      "name": "DtAquisicao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoFrete",
      "label": "TipoFrete",
      "name": "TipoFrete",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlDocumento",
      "label": "VlDocumento",
      "name": "VlDocumento",
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
      "field": "VlServico",
      "label": "VlServico",
      "name": "VlServico",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSBasCalc",
      "label": "ICMSBasCalc",
      "name": "ICMSBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "VlNaoTributado",
      "label": "VlNaoTributado",
      "name": "VlNaoTributado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "IndicadorNatFrete",
      "label": "IndicadorNatFrete",
      "name": "IndicadorNatFrete",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumChaveNFE",
      "label": "NumChaveNFE",
      "name": "NumChaveNFE",
      "type": "string",
      "size": 44,
      "allowNull": false
    },
    {
      "field": "SituacaoDoc",
      "label": "SituacaoDoc",
      "name": "SituacaoDoc",
      "type": "int",
      "size": 4
    },
    {
      "field": "ObsGerais",
      "label": "ObsGerais",
      "name": "ObsGerais",
      "type": "string",
      "size": 1024
    }
  ]
}
