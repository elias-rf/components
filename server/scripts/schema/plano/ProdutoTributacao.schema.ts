import { TTableDef } from "@/types/model";

export const ProdutoTributacao: TTableDef = {
  database: "plano",
  table: "ProdutoTributacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgCompoeBaseIRRF",
      label: "FgCompoeBaseIRRF",
      name: "FgCompoeBaseIRRF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgCompoeBaseIN381",
      label: "FgCompoeBaseIN381",
      name: "FgCompoeBaseIN381",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgCompoeBaseISS",
      label: "FgCompoeBaseISS",
      name: "FgCompoeBaseISS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Fg6142",
      label: "Fg6142",
      name: "Fg6142",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgReducaoICMS",
      label: "FgReducaoICMS",
      name: "FgReducaoICMS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgReducaoICMSNC",
      label: "FgReducaoICMSNC",
      name: "FgReducaoICMSNC",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgSubstituido030",
      label: "FgSubstituido030",
      name: "FgSubstituido030",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgIsentoICMSPDV",
      label: "FgIsentoICMSPDV",
      name: "FgIsentoICMSPDV",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoTributacaoICMS",
      label: "TipoTributacaoICMS",
      name: "TipoTributacaoICMS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ModDeterminacaoBCICMS",
      label: "ModDeterminacaoBCICMS",
      name: "ModDeterminacaoBCICMS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ModDeterminacaoBCICMSSub",
      label: "ModDeterminacaoBCICMSSub",
      name: "ModDeterminacaoBCICMSSub",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SituacaoTributariaIPISaida",
      label: "SituacaoTributariaIPISaida",
      name: "SituacaoTributariaIPISaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaIPISaida",
      label: "AliquotaIPISaida",
      name: "AliquotaIPISaida",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SituacaoTributariaIPIEntrada",
      label: "SituacaoTributariaIPIEntrada",
      name: "SituacaoTributariaIPIEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaIPIEntrada",
      label: "AliquotaIPIEntrada",
      name: "AliquotaIPIEntrada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdEnquadramentoIPI",
      label: "CdEnquadramentoIPI",
      name: "CdEnquadramentoIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ClasseEnquadramentoIPI",
      label: "ClasseEnquadramentoIPI",
      name: "ClasseEnquadramentoIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdSeloIPI",
      label: "CdSeloIPI",
      name: "CdSeloIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SituacaoTributariaPISSaida",
      label: "SituacaoTributariaPISSaida",
      name: "SituacaoTributariaPISSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaPISSaida",
      label: "AliquotaPISSaida",
      name: "AliquotaPISSaida",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SituacaoTributariaPISEntrada",
      label: "SituacaoTributariaPISEntrada",
      name: "SituacaoTributariaPISEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaPISEntrada",
      label: "AliquotaPISEntrada",
      name: "AliquotaPISEntrada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SituacaoTributariaCOFINSSaida",
      label: "SituacaoTributariaCOFINSSaida",
      name: "SituacaoTributariaCOFINSSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaCOFINSSaida",
      label: "AliquotaCOFINSSaida",
      name: "AliquotaCOFINSSaida",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SituacaoTributariaCOFINSEntrada",
      label: "SituacaoTributariaCOFINSEntrada",
      name: "SituacaoTributariaCOFINSEntrada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaCOFINSEntrada",
      label: "AliquotaCOFINSEntrada",
      name: "AliquotaCOFINSEntrada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "AliquotaISS",
      label: "AliquotaISS",
      name: "AliquotaISS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdInformacaoComplementarNF",
      label: "CdInformacaoComplementarNF",
      name: "CdInformacaoComplementarNF",
      typeField: "int",
    },
    {
      field: "PercentualMedioImposto",
      label: "PercentualMedioImposto",
      name: "PercentualMedioImposto",
      typeField: "string",
    },
    {
      field: "VlBaseCalculoICMSSTAnterior",
      label: "VlBaseCalculoICMSSTAnterior",
      name: "VlBaseCalculoICMSSTAnterior",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlICMSSTAnterior",
      label: "VlICMSSTAnterior",
      name: "VlICMSSTAnterior",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QuantidadeLitros",
      label: "QuantidadeLitros",
      name: "QuantidadeLitros",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIPILitro",
      label: "VlIPILitro",
      name: "VlIPILitro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPISLitro",
      label: "VlPISLitro",
      name: "VlPISLitro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCOFINSLitro",
      label: "VlCOFINSLitro",
      name: "VlCOFINSLitro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NCMDV",
      label: "NCMDV",
      name: "NCMDV",
      typeField: "string",
    },
    {
      field: "FgCompoeBlocoK",
      label: "FgCompoeBlocoK",
      name: "FgCompoeBlocoK",
      typeField: "string",
    },
  ],
};
