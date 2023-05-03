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
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Versao",
      label: "Versao",
      name: "Versao",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "SiglaWS",
      label: "SiglaWS",
      name: "SiglaWS",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "VersaoQRCode",
      label: "VersaoQRCode",
      name: "VersaoQRCode",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "IdToken",
      label: "IdToken",
      name: "IdToken",
      typeField: "string",
      size: 6,
      allowNull: false,
    },
    {
      field: "CSC",
      label: "CSC",
      name: "CSC",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "SerieNotaFiscal",
      label: "SerieNotaFiscal",
      name: "SerieNotaFiscal",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Ambiente",
      label: "Ambiente",
      name: "Ambiente",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "TipoImpressao",
      label: "TipoImpressao",
      name: "TipoImpressao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "TipoDanfe",
      label: "TipoDanfe",
      name: "TipoDanfe",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "TipoEmissao",
      label: "TipoEmissao",
      name: "TipoEmissao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CodigoVinculacao",
      label: "CodigoVinculacao",
      name: "CodigoVinculacao",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "CodigoAtivacao",
      label: "CodigoAtivacao",
      name: "CodigoAtivacao",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "CaminhoNfe",
      label: "CaminhoNfe",
      name: "CaminhoNfe",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "FgGeraPDFDanfe",
      label: "FgGeraPDFDanfe",
      name: "FgGeraPDFDanfe",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "CaminhoProcNfe",
      label: "CaminhoProcNfe",
      name: "CaminhoProcNfe",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "CaminhoPDF",
      label: "CaminhoPDF",
      name: "CaminhoPDF",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "FgDanfeImprimeLotes",
      label: "FgDanfeImprimeLotes",
      name: "FgDanfeImprimeLotes",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "MensagemEmail",
      label: "MensagemEmail",
      name: "MensagemEmail",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "FgConcatenaOBSItemDanfe",
      label: "FgConcatenaOBSItemDanfe",
      name: "FgConcatenaOBSItemDanfe",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgConcatenaOBSDanfe",
      label: "FgConcatenaOBSDanfe",
      name: "FgConcatenaOBSDanfe",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgImprimirTotalImpostoItem",
      label: "FgImprimirTotalImpostoItem",
      name: "FgImprimirTotalImpostoItem",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumViasDanfe",
      label: "NumViasDanfe",
      name: "NumViasDanfe",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "FgMultiplasLinhas",
      label: "FgMultiplasLinhas",
      name: "FgMultiplasLinhas",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "LimiteHorasCancelamento",
      label: "LimiteHorasCancelamento",
      name: "LimiteHorasCancelamento",
      typeField: "int",
      size: 5,
      scale: 1,
      allowNull: false,
    },
    {
      field: "VlAvisoRetirada",
      label: "VlAvisoRetirada",
      name: "VlAvisoRetirada",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdClientePadrao",
      label: "CdClientePadrao",
      name: "CdClientePadrao",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdVendedorPadrao",
      label: "CdVendedorPadrao",
      name: "CdVendedorPadrao",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdTipoVendaPadrao",
      label: "CdTipoVendaPadrao",
      name: "CdTipoVendaPadrao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "QuantidadePadrao",
      label: "QuantidadePadrao",
      name: "QuantidadePadrao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgInicioVenda",
      label: "FgInicioVenda",
      name: "FgInicioVenda",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgPreVenda",
      label: "FgPreVenda",
      name: "FgPreVenda",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgPreVendaSimplificada",
      label: "FgPreVendaSimplificada",
      name: "FgPreVendaSimplificada",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "QuantidadeLimite",
      label: "QuantidadeLimite",
      name: "QuantidadeLimite",
      typeField: "int",
      size: 9,
      scale: 6,
      allowNull: false,
    },
    {
      field: "QuantidadeAlerta",
      label: "QuantidadeAlerta",
      name: "QuantidadeAlerta",
      typeField: "int",
      size: 9,
      scale: 6,
      allowNull: false,
    },
    {
      field: "NumSerieSAT",
      label: "NumSerieSAT",
      name: "NumSerieSAT",
      typeField: "string",
      size: 24,
    },
  ],
};
