import { TTableDef } from "@/types/model";

export const ConfiguracaoNFCe: TTableDef = {
  database: "plano",
  table: "ConfiguracaoNFCe",
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
      field: "TempoConsulta",
      label: "TempoConsulta",
      name: "TempoConsulta",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CertificadoNfe",
      label: "CertificadoNfe",
      name: "CertificadoNfe",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "UsuarioNfe",
      label: "UsuarioNfe",
      name: "UsuarioNfe",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "SenhaNfe",
      label: "SenhaNfe",
      name: "SenhaNfe",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "ProxyNfe",
      label: "ProxyNfe",
      name: "ProxyNfe",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "LicencaNfe",
      label: "LicencaNfe",
      name: "LicencaNfe",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "CaminhoNfe",
      label: "CaminhoNfe",
      name: "CaminhoNfe",
      typeField: "string",
      size: 128,
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
      size: 128,
      allowNull: false,
    },
    {
      field: "CaminhoPDF",
      label: "CaminhoPDF",
      name: "CaminhoPDF",
      typeField: "string",
      size: 128,
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
      field: "MensagemContingencia",
      label: "MensagemContingencia",
      name: "MensagemContingencia",
      typeField: "string",
      size: 256,
      allowNull: false,
    },
    {
      field: "DataHorarioContingencia",
      label: "DataHorarioContingencia",
      name: "DataHorarioContingencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
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
      field: "FgCancelaPorEvento",
      label: "FgCancelaPorEvento",
      name: "FgCancelaPorEvento",
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
      field: "NumViasDanfeContigencia",
      label: "NumViasDanfeContigencia",
      name: "NumViasDanfeContigencia",
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
      field: "UTC",
      label: "UTC",
      name: "UTC",
      typeField: "string",
      size: 6,
      allowNull: false,
    },
    {
      field: "LimiteHorasCancelamento",
      label: "LimiteHorasCancelamento",
      name: "LimiteHorasCancelamento",
      typeField: "int",
      size: 5,
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
      field: "FgImprimeVendedorObs",
      label: "FgImprimeVendedorObs",
      name: "FgImprimeVendedorObs",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgImprimeCodigoCliente",
      label: "FgImprimeCodigoCliente",
      name: "FgImprimeCodigoCliente",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgNT201502",
      label: "FgNT201502",
      name: "FgNT201502",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgNT201503",
      label: "FgNT201503",
      name: "FgNT201503",
      typeField: "string",
      size: 1,
    },
    {
      field: "QuantidadeAlerta",
      label: "QuantidadeAlerta",
      name: "QuantidadeAlerta",
      typeField: "int",
      size: 9,
      scale: 6,
    },
    {
      field: "QuantidadeLimite",
      label: "QuantidadeLimite",
      name: "QuantidadeLimite",
      typeField: "int",
      size: 9,
      scale: 6,
    },
    {
      field: "FgBloqueiaSangria",
      label: "FgBloqueiaSangria",
      name: "FgBloqueiaSangria",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgExibeAoIniciar",
      label: "FgExibeAoIniciar",
      name: "FgExibeAoIniciar",
      typeField: "string",
      size: 1,
    },
    {
      field: "TextoAberturaVenda",
      label: "TextoAberturaVenda",
      name: "TextoAberturaVenda",
      typeField: "string",
      size: 32,
    },
    {
      field: "FgLetrasMaiores",
      label: "FgLetrasMaiores",
      name: "FgLetrasMaiores",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgOcultaItensKit",
      label: "FgOcultaItensKit",
      name: "FgOcultaItensKit",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgOcultaMensagensConfirmacao",
      label: "FgOcultaMensagensConfirmacao",
      name: "FgOcultaMensagensConfirmacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgImprimeDescontoItem",
      label: "FgImprimeDescontoItem",
      name: "FgImprimeDescontoItem",
      typeField: "string",
      size: 1,
    },
    {
      field: "ModeloNotaFiscal",
      label: "ModeloNotaFiscal",
      name: "ModeloNotaFiscal",
      typeField: "string",
      size: 3,
    },
    {
      field: "FgPermiteSomenteNumeros",
      label: "FgPermiteSomenteNumeros",
      name: "FgPermiteSomenteNumeros",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgImprimirOperadorCaixa",
      label: "FgImprimirOperadorCaixa",
      name: "FgImprimirOperadorCaixa",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgExibeAltPedido",
      label: "FgExibeAltPedido",
      name: "FgExibeAltPedido",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgLinhaUnicaItem",
      label: "FgLinhaUnicaItem",
      name: "FgLinhaUnicaItem",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgFechamentoDinheiro",
      label: "FgFechamentoDinheiro",
      name: "FgFechamentoDinheiro",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgFechamentoCartao",
      label: "FgFechamentoCartao",
      name: "FgFechamentoCartao",
      typeField: "string",
      size: 1,
    },
    {
      field: "FGNT201901",
      label: "FGNT201901",
      name: "FGNT201901",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgCdProdutoGrid",
      label: "FgCdProdutoGrid",
      name: "FgCdProdutoGrid",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgFonteMaiorGrid",
      label: "FgFonteMaiorGrid",
      name: "FgFonteMaiorGrid",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgCPFNota",
      label: "FgCPFNota",
      name: "FgCPFNota",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgNFCeDesconectada",
      label: "FgNFCeDesconectada",
      name: "FgNFCeDesconectada",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgConfirmaEmissao",
      label: "FgConfirmaEmissao",
      name: "FgConfirmaEmissao",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgObrigaPedido",
      label: "FgObrigaPedido",
      name: "FgObrigaPedido",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgEnvioSincrono",
      label: "FgEnvioSincrono",
      name: "FgEnvioSincrono",
      typeField: "string",
      size: 1,
    },
  ],
};
