import { TEntity } from "@er/types/*";

export const SpedItem: TEntity =
  {
  "database": "plano",
  "table": "SpedItem",
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
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
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "IndMovimento",
      "label": "IndMovimento",
      "name": "IndMovimento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 6,
      "allowNull": false
    },
    {
      "field": "CFOPItem",
      "label": "CFOPItem",
      "name": "CFOPItem",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdNatureza",
      "label": "CdNatureza",
      "name": "CdNatureza",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlProduto",
      "label": "VlProduto",
      "name": "VlProduto",
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
      "field": "VlSuframa",
      "label": "VlSuframa",
      "name": "VlSuframa",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlFreteItem",
      "label": "VlFreteItem",
      "name": "VlFreteItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlSeguroItem",
      "label": "VlSeguroItem",
      "name": "VlSeguroItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDespesaAcessoriaItem",
      "label": "VlDespesaAcessoriaItem",
      "name": "VlDespesaAcessoriaItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotalItem",
      "label": "VlTotalItem",
      "name": "VlTotalItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CSTICMS",
      "label": "CSTICMS",
      "name": "CSTICMS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMSItem",
      "label": "VlBaseCalculoICMSItem",
      "name": "VlBaseCalculoICMSItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSItem",
      "label": "VlICMSItem",
      "name": "VlICMSItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMSSTItem",
      "label": "VlBaseCalculoICMSSTItem",
      "name": "VlBaseCalculoICMSSTItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaICMSST",
      "label": "AliquotaICMSST",
      "name": "AliquotaICMSST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSSTItem",
      "label": "VlICMSSTItem",
      "name": "VlICMSSTItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CSTIPI",
      "label": "CSTIPI",
      "name": "CSTIPI",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdEnquadramentoIPI",
      "label": "CdEnquadramentoIPI",
      "name": "CdEnquadramentoIPI",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoIPIItem",
      "label": "VlBaseCalculoIPIItem",
      "name": "VlBaseCalculoIPIItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaIPI",
      "label": "AliquotaIPI",
      "name": "AliquotaIPI",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIPIItem",
      "label": "VlIPIItem",
      "name": "VlIPIItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdCreditoPISCOFINS",
      "label": "CdCreditoPISCOFINS",
      "name": "CdCreditoPISCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "IndOrigemCreditoPISCOFINS",
      "label": "IndOrigemCreditoPISCOFINS",
      "name": "IndOrigemCreditoPISCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdContApuradaPISCOFINS",
      "label": "CdContApuradaPISCOFINS",
      "name": "CdContApuradaPISCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdBaseCreditoPISCOFINS",
      "label": "CdBaseCreditoPISCOFINS",
      "name": "CdBaseCreditoPISCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdNaturezaPISCOFINS",
      "label": "CdNaturezaPISCOFINS",
      "name": "CdNaturezaPISCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CSTPIS",
      "label": "CSTPIS",
      "name": "CSTPIS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoPISItem",
      "label": "VlBaseCalculoPISItem",
      "name": "VlBaseCalculoPISItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaPIS",
      "label": "AliquotaPIS",
      "name": "AliquotaPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPISItem",
      "label": "VlPISItem",
      "name": "VlPISItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPISSTItem",
      "label": "VlPISSTItem",
      "name": "VlPISSTItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CSTCOFINS",
      "label": "CSTCOFINS",
      "name": "CSTCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoCOFINSItem",
      "label": "VlBaseCalculoCOFINSItem",
      "name": "VlBaseCalculoCOFINSItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaCOFINS",
      "label": "AliquotaCOFINS",
      "name": "AliquotaCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCOFINSItem",
      "label": "VlCOFINSItem",
      "name": "VlCOFINSItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCOFINSSTItem",
      "label": "VlCOFINSSTItem",
      "name": "VlCOFINSSTItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ControleEstoque",
      "label": "ControleEstoque",
      "name": "ControleEstoque",
      "type": "int",
      "size": 4
    },
    {
      "field": "PlanoContaSped",
      "label": "PlanoContaSped",
      "name": "PlanoContaSped",
      "type": "int",
      "size": 9
    }
  ]
}
