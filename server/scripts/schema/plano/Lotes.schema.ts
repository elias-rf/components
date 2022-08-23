import { TEntity } from "@er/types/*";

export const Lotes: TEntity =
  {
  "database": "plano",
  "table": "Lotes",
  "fields": [
    {
      "field": "CdLote",
      "label": "CdLote",
      "name": "CdLote",
      "type": "string",
      "size": 18,
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdNRA",
      "label": "CdNRA",
      "name": "CdNRA",
      "type": "string",
      "size": 6
    },
    {
      "field": "DtFabricacao",
      "label": "DtFabricacao",
      "name": "DtFabricacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtValidade",
      "label": "DtValidade",
      "name": "DtValidade",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtAnalise",
      "label": "DtAnalise",
      "name": "DtAnalise",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Aspecto",
      "label": "Aspecto",
      "name": "Aspecto",
      "type": "string",
      "size": 40
    },
    {
      "field": "FatorCorrecao",
      "label": "FatorCorrecao",
      "name": "FatorCorrecao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Densidade",
      "label": "Densidade",
      "name": "Densidade",
      "type": "float",
      "size": 4
    },
    {
      "field": "PercentualDiluicao",
      "label": "PercentualDiluicao",
      "name": "PercentualDiluicao",
      "type": "float",
      "size": 4
    },
    {
      "field": "SituacaoLote",
      "label": "SituacaoLote",
      "name": "SituacaoLote",
      "type": "string",
      "size": 1
    },
    {
      "field": "SerieNfEntrada",
      "label": "SerieNfEntrada",
      "name": "SerieNfEntrada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "QtdeAdquirida",
      "label": "QtdeAdquirida",
      "name": "QtdeAdquirida",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumNfEntrada",
      "label": "NumNfEntrada",
      "name": "NumNfEntrada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SaldoPeso",
      "label": "SaldoPeso",
      "name": "SaldoPeso",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtEntrada",
      "label": "DtEntrada",
      "name": "DtEntrada",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtLimiteUso",
      "label": "DtLimiteUso",
      "name": "DtLimiteUso",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "TipoLote",
      "label": "TipoLote",
      "name": "TipoLote",
      "type": "string",
      "size": 1
    },
    {
      "field": "IdReduzido",
      "label": "IdReduzido",
      "name": "IdReduzido",
      "type": "float",
      "size": 8
    },
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
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "NumLote",
      "label": "NumLote",
      "name": "NumLote",
      "type": "string",
      "size": 18
    }
  ]
}
