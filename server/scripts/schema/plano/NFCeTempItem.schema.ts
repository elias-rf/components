import { TTableDef } from "@/types/model";

export const NFCeTempItem: TTableDef = {
  database: "plano",
  table: "NFCeTempItem",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtOperacao",
      label: "DtOperacao",
      name: "DtOperacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "IdOperacao",
      label: "IdOperacao",
      name: "IdOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
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
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdReferencia",
      label: "CdReferencia",
      name: "CdReferencia",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgImprimeComponentes",
      label: "FgImprimeComponentes",
      name: "FgImprimeComponentes",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto",
      label: "PercDesconto",
      name: "PercDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDescMaxVendedor",
      label: "PercDescMaxVendedor",
      name: "PercDescMaxVendedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDescMaxGerente",
      label: "PercDescMaxGerente",
      name: "PercDescMaxGerente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgVMSCard",
      label: "FgVMSCard",
      name: "FgVMSCard",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgServico",
      label: "FgServico",
      name: "FgServico",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgPsico",
      label: "FgPsico",
      name: "FgPsico",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgTipoReceita",
      label: "FgTipoReceita",
      name: "FgTipoReceita",
      typeField: "string",
    },
    {
      field: "FgLoteControlado",
      label: "FgLoteControlado",
      name: "FgLoteControlado",
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
      field: "TipoTributacaoPIS",
      label: "TipoTributacaoPIS",
      name: "TipoTributacaoPIS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoTributacaoCOFINS",
      label: "TipoTributacaoCOFINS",
      name: "TipoTributacaoCOFINS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaCOFINS",
      label: "AliquotaCOFINS",
      name: "AliquotaCOFINS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisVista",
      label: "PercComisVista",
      name: "PercComisVista",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisVistaExtra",
      label: "PercComisVistaExtra",
      name: "PercComisVistaExtra",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisPrazo",
      label: "PercComisPrazo",
      name: "PercComisPrazo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisPrazoExtra",
      label: "PercComisPrazoExtra",
      name: "PercComisPrazoExtra",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdBeneficioFiscal",
      label: "CdBeneficioFiscal",
      name: "CdBeneficioFiscal",
      typeField: "string",
    },
    {
      field: "AliquotaDesoneracao",
      label: "AliquotaDesoneracao",
      name: "AliquotaDesoneracao",
      typeField: "int",
    },
    {
      field: "VlDesoneracao",
      label: "VlDesoneracao",
      name: "VlDesoneracao",
      typeField: "int",

      scale: 2,
    },
    {
      field: "CdMotivoDesoneracao",
      label: "CdMotivoDesoneracao",
      name: "CdMotivoDesoneracao",
      typeField: "int",
    },
  ],
};
