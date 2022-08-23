import { TEntity } from "@er/types/*";

export const SpedMestre: TEntity =
  {
  "database": "plano",
  "table": "SpedMestre",
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
      "field": "CdEmitente",
      "label": "CdEmitente",
      "name": "CdEmitente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "TipoEmitente",
      "label": "TipoEmitente",
      "name": "TipoEmitente",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "NumDocumento",
      "label": "NumDocumento",
      "name": "NumDocumento",
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
      "field": "SubSerie",
      "label": "SubSerie",
      "name": "SubSerie",
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
      "field": "NumECF",
      "label": "NumECF",
      "name": "NumECF",
      "type": "int",
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
      "field": "TipoNotaFiscal",
      "label": "TipoNotaFiscal",
      "name": "TipoNotaFiscal",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "SituacaoDocumento",
      "label": "SituacaoDocumento",
      "name": "SituacaoDocumento",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ChaveEletronica",
      "label": "ChaveEletronica",
      "name": "ChaveEletronica",
      "type": "string",
      "size": 64,
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
      "field": "DtOperacao",
      "label": "DtOperacao",
      "name": "DtOperacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "FormaPagamento",
      "label": "FormaPagamento",
      "name": "FormaPagamento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoFrete",
      "label": "TipoFrete",
      "name": "TipoFrete",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlProdutos",
      "label": "VlProdutos",
      "name": "VlProdutos",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlFrete",
      "label": "VlFrete",
      "name": "VlFrete",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlSeguro",
      "label": "VlSeguro",
      "name": "VlSeguro",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDespesaAcessoria",
      "label": "VlDespesaAcessoria",
      "name": "VlDespesaAcessoria",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotalNota",
      "label": "VlTotalNota",
      "name": "VlTotalNota",
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
      "field": "VlICMS",
      "label": "VlICMS",
      "name": "VlICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMSST",
      "label": "VlBaseCalculoICMSST",
      "name": "VlBaseCalculoICMSST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSST",
      "label": "VlICMSST",
      "name": "VlICMSST",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "VlPIS",
      "label": "VlPIS",
      "name": "VlPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPISST",
      "label": "VlPISST",
      "name": "VlPISST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCofins",
      "label": "VlCofins",
      "name": "VlCofins",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCofinsST",
      "label": "VlCofinsST",
      "name": "VlCofinsST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoPIS",
      "label": "VlBaseCalculoPIS",
      "name": "VlBaseCalculoPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoCofins",
      "label": "VlBaseCalculoCofins",
      "name": "VlBaseCalculoCofins",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VLISS",
      "label": "VLISS",
      "name": "VLISS",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
