import { TTableDef } from "@/types/model";

export const ConfiguracaoNFCeSAT: TTableDef = {
  database: "plano",
  table: "ConfiguracaoNFCeSAT",
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
      field: "Versao",
      label: "Versao",
      name: "Versao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SiglaWS",
      label: "SiglaWS",
      name: "SiglaWS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VersaoQRCode",
      label: "VersaoQRCode",
      name: "VersaoQRCode",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IdToken",
      label: "IdToken",
      name: "IdToken",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSC",
      label: "CSC",
      name: "CSC",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SerieNotaFiscal",
      label: "SerieNotaFiscal",
      name: "SerieNotaFiscal",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Ambiente",
      label: "Ambiente",
      name: "Ambiente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoImpressao",
      label: "TipoImpressao",
      name: "TipoImpressao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoDanfe",
      label: "TipoDanfe",
      name: "TipoDanfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoEmissao",
      label: "TipoEmissao",
      name: "TipoEmissao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CodigoVinculacao",
      label: "CodigoVinculacao",
      name: "CodigoVinculacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CodigoAtivacao",
      label: "CodigoAtivacao",
      name: "CodigoAtivacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CaminhoNfe",
      label: "CaminhoNfe",
      name: "CaminhoNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgGeraPDFDanfe",
      label: "FgGeraPDFDanfe",
      name: "FgGeraPDFDanfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CaminhoProcNfe",
      label: "CaminhoProcNfe",
      name: "CaminhoProcNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CaminhoPDF",
      label: "CaminhoPDF",
      name: "CaminhoPDF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgDanfeImprimeLotes",
      label: "FgDanfeImprimeLotes",
      name: "FgDanfeImprimeLotes",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MensagemEmail",
      label: "MensagemEmail",
      name: "MensagemEmail",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgConcatenaOBSItemDanfe",
      label: "FgConcatenaOBSItemDanfe",
      name: "FgConcatenaOBSItemDanfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgConcatenaOBSDanfe",
      label: "FgConcatenaOBSDanfe",
      name: "FgConcatenaOBSDanfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgImprimirTotalImpostoItem",
      label: "FgImprimirTotalImpostoItem",
      name: "FgImprimirTotalImpostoItem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumViasDanfe",
      label: "NumViasDanfe",
      name: "NumViasDanfe",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgMultiplasLinhas",
      label: "FgMultiplasLinhas",
      name: "FgMultiplasLinhas",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LimiteHorasCancelamento",
      label: "LimiteHorasCancelamento",
      name: "LimiteHorasCancelamento",
      typeField: "int",

      scale: 1,
      allowNull: false,
    },
    {
      field: "VlAvisoRetirada",
      label: "VlAvisoRetirada",
      name: "VlAvisoRetirada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdClientePadrao",
      label: "CdClientePadrao",
      name: "CdClientePadrao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdVendedorPadrao",
      label: "CdVendedorPadrao",
      name: "CdVendedorPadrao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdTipoVendaPadrao",
      label: "CdTipoVendaPadrao",
      name: "CdTipoVendaPadrao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QuantidadePadrao",
      label: "QuantidadePadrao",
      name: "QuantidadePadrao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgInicioVenda",
      label: "FgInicioVenda",
      name: "FgInicioVenda",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgPreVenda",
      label: "FgPreVenda",
      name: "FgPreVenda",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgPreVendaSimplificada",
      label: "FgPreVendaSimplificada",
      name: "FgPreVendaSimplificada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QuantidadeLimite",
      label: "QuantidadeLimite",
      name: "QuantidadeLimite",
      typeField: "int",

      scale: 6,
      allowNull: false,
    },
    {
      field: "QuantidadeAlerta",
      label: "QuantidadeAlerta",
      name: "QuantidadeAlerta",
      typeField: "int",

      scale: 6,
      allowNull: false,
    },
    {
      field: "NumSerieSAT",
      label: "NumSerieSAT",
      name: "NumSerieSAT",
      typeField: "string",
    },
  ],
};
