import { TEntity } from "@er/types/*";

export const NotaEntradaGNREMestre: TEntity =
  {
  "database": "plano",
  "table": "NotaEntradaGNREMestre",
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
      "size": 5,
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
      "field": "PercMinimoICMSSub",
      "label": "PercMinimoICMSSub",
      "name": "PercMinimoICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPrincipal",
      "label": "VlPrincipal",
      "name": "VlPrincipal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAtualizacaoMonetaria",
      "label": "VlAtualizacaoMonetaria",
      "name": "VlAtualizacaoMonetaria",
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
      "field": "VlMulta",
      "label": "VlMulta",
      "name": "VlMulta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtRecolhimento",
      "label": "DtRecolhimento",
      "name": "DtRecolhimento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
    }
  ]
}
