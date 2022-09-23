import { TEntity } from "@er/types/*";

export const ProdutoTributacao: TEntity =
  {
  "database": "plano",
  "table": "ProdutoTributacao",
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "FgCompoeBaseIRRF",
      "label": "FgCompoeBaseIRRF",
      "name": "FgCompoeBaseIRRF",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgCompoeBaseIN381",
      "label": "FgCompoeBaseIN381",
      "name": "FgCompoeBaseIN381",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgCompoeBaseISS",
      "label": "FgCompoeBaseISS",
      "name": "FgCompoeBaseISS",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Fg6142",
      "label": "Fg6142",
      "name": "Fg6142",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgReducaoICMS",
      "label": "FgReducaoICMS",
      "name": "FgReducaoICMS",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgReducaoICMSNC",
      "label": "FgReducaoICMSNC",
      "name": "FgReducaoICMSNC",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgSubstituido030",
      "label": "FgSubstituido030",
      "name": "FgSubstituido030",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgIsentoICMSPDV",
      "label": "FgIsentoICMSPDV",
      "name": "FgIsentoICMSPDV",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoICMS",
      "label": "TipoTributacaoICMS",
      "name": "TipoTributacaoICMS",
      "type": "string",
      "size": 1,
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
      "field": "ModDeterminacaoBCICMS",
      "label": "ModDeterminacaoBCICMS",
      "name": "ModDeterminacaoBCICMS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ModDeterminacaoBCICMSSub",
      "label": "ModDeterminacaoBCICMSSub",
      "name": "ModDeterminacaoBCICMSSub",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "SituacaoTributariaIPISaida",
      "label": "SituacaoTributariaIPISaida",
      "name": "SituacaoTributariaIPISaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaIPISaida",
      "label": "AliquotaIPISaida",
      "name": "AliquotaIPISaida",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SituacaoTributariaIPIEntrada",
      "label": "SituacaoTributariaIPIEntrada",
      "name": "SituacaoTributariaIPIEntrada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaIPIEntrada",
      "label": "AliquotaIPIEntrada",
      "name": "AliquotaIPIEntrada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdEnquadramentoIPI",
      "label": "CdEnquadramentoIPI",
      "name": "CdEnquadramentoIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "ClasseEnquadramentoIPI",
      "label": "ClasseEnquadramentoIPI",
      "name": "ClasseEnquadramentoIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "CdSeloIPI",
      "label": "CdSeloIPI",
      "name": "CdSeloIPI",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "SituacaoTributariaPISSaida",
      "label": "SituacaoTributariaPISSaida",
      "name": "SituacaoTributariaPISSaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaPISSaida",
      "label": "AliquotaPISSaida",
      "name": "AliquotaPISSaida",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SituacaoTributariaPISEntrada",
      "label": "SituacaoTributariaPISEntrada",
      "name": "SituacaoTributariaPISEntrada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaPISEntrada",
      "label": "AliquotaPISEntrada",
      "name": "AliquotaPISEntrada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SituacaoTributariaCOFINSSaida",
      "label": "SituacaoTributariaCOFINSSaida",
      "name": "SituacaoTributariaCOFINSSaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaCOFINSSaida",
      "label": "AliquotaCOFINSSaida",
      "name": "AliquotaCOFINSSaida",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SituacaoTributariaCOFINSEntrada",
      "label": "SituacaoTributariaCOFINSEntrada",
      "name": "SituacaoTributariaCOFINSEntrada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaCOFINSEntrada",
      "label": "AliquotaCOFINSEntrada",
      "name": "AliquotaCOFINSEntrada",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "AliquotaISS",
      "label": "AliquotaISS",
      "name": "AliquotaISS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdInformacaoComplementarNF",
      "label": "CdInformacaoComplementarNF",
      "name": "CdInformacaoComplementarNF",
      "type": "int",
      "size": 2
    },
    {
      "field": "PercentualMedioImposto",
      "label": "PercentualMedioImposto",
      "name": "PercentualMedioImposto",
      "type": "string",
      "size": 5
    },
    {
      "field": "VlBaseCalculoICMSSTAnterior",
      "label": "VlBaseCalculoICMSSTAnterior",
      "name": "VlBaseCalculoICMSSTAnterior",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSSTAnterior",
      "label": "VlICMSSTAnterior",
      "name": "VlICMSSTAnterior",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QuantidadeLitros",
      "label": "QuantidadeLitros",
      "name": "QuantidadeLitros",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIPILitro",
      "label": "VlIPILitro",
      "name": "VlIPILitro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPISLitro",
      "label": "VlPISLitro",
      "name": "VlPISLitro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCOFINSLitro",
      "label": "VlCOFINSLitro",
      "name": "VlCOFINSLitro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NCMDV",
      "label": "NCMDV",
      "name": "NCMDV",
      "type": "string",
      "size": 2
    },
    {
      "field": "FgCompoeBlocoK",
      "label": "FgCompoeBlocoK",
      "name": "FgCompoeBlocoK",
      "type": "string",
      "size": 1
    }
  ]
}