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
      field: "TempoConsulta",
      label: "TempoConsulta",
      name: "TempoConsulta",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CertificadoNfe",
      label: "CertificadoNfe",
      name: "CertificadoNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UsuarioNfe",
      label: "UsuarioNfe",
      name: "UsuarioNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SenhaNfe",
      label: "SenhaNfe",
      name: "SenhaNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ProxyNfe",
      label: "ProxyNfe",
      name: "ProxyNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LicencaNfe",
      label: "LicencaNfe",
      name: "LicencaNfe",
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
      field: "MensagemContingencia",
      label: "MensagemContingencia",
      name: "MensagemContingencia",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DataHorarioContingencia",
      label: "DataHorarioContingencia",
      name: "DataHorarioContingencia",
      typeField: "datetime",

      scale: 3,
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
      field: "FgCancelaPorEvento",
      label: "FgCancelaPorEvento",
      name: "FgCancelaPorEvento",
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
      field: "NumViasDanfeContigencia",
      label: "NumViasDanfeContigencia",
      name: "NumViasDanfeContigencia",
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
      field: "UTC",
      label: "UTC",
      name: "UTC",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LimiteHorasCancelamento",
      label: "LimiteHorasCancelamento",
      name: "LimiteHorasCancelamento",
      typeField: "int",

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
      field: "FgImprimeVendedorObs",
      label: "FgImprimeVendedorObs",
      name: "FgImprimeVendedorObs",
      typeField: "string",
    },
    {
      field: "FgImprimeCodigoCliente",
      label: "FgImprimeCodigoCliente",
      name: "FgImprimeCodigoCliente",
      typeField: "string",
    },
    {
      field: "FgNT201502",
      label: "FgNT201502",
      name: "FgNT201502",
      typeField: "string",
    },
    {
      field: "FgNT201503",
      label: "FgNT201503",
      name: "FgNT201503",
      typeField: "string",
    },
    {
      field: "QuantidadeAlerta",
      label: "QuantidadeAlerta",
      name: "QuantidadeAlerta",
      typeField: "int",

      scale: 6,
    },
    {
      field: "QuantidadeLimite",
      label: "QuantidadeLimite",
      name: "QuantidadeLimite",
      typeField: "int",

      scale: 6,
    },
    {
      field: "FgBloqueiaSangria",
      label: "FgBloqueiaSangria",
      name: "FgBloqueiaSangria",
      typeField: "string",
    },
    {
      field: "FgExibeAoIniciar",
      label: "FgExibeAoIniciar",
      name: "FgExibeAoIniciar",
      typeField: "string",
    },
    {
      field: "TextoAberturaVenda",
      label: "TextoAberturaVenda",
      name: "TextoAberturaVenda",
      typeField: "string",
    },
    {
      field: "FgLetrasMaiores",
      label: "FgLetrasMaiores",
      name: "FgLetrasMaiores",
      typeField: "string",
    },
    {
      field: "FgOcultaItensKit",
      label: "FgOcultaItensKit",
      name: "FgOcultaItensKit",
      typeField: "string",
    },
    {
      field: "FgOcultaMensagensConfirmacao",
      label: "FgOcultaMensagensConfirmacao",
      name: "FgOcultaMensagensConfirmacao",
      typeField: "string",
    },
    {
      field: "FgImprimeDescontoItem",
      label: "FgImprimeDescontoItem",
      name: "FgImprimeDescontoItem",
      typeField: "string",
    },
    {
      field: "ModeloNotaFiscal",
      label: "ModeloNotaFiscal",
      name: "ModeloNotaFiscal",
      typeField: "string",
    },
    {
      field: "FgPermiteSomenteNumeros",
      label: "FgPermiteSomenteNumeros",
      name: "FgPermiteSomenteNumeros",
      typeField: "string",
    },
    {
      field: "FgImprimirOperadorCaixa",
      label: "FgImprimirOperadorCaixa",
      name: "FgImprimirOperadorCaixa",
      typeField: "string",
    },
    {
      field: "FgExibeAltPedido",
      label: "FgExibeAltPedido",
      name: "FgExibeAltPedido",
      typeField: "string",
    },
    {
      field: "FgLinhaUnicaItem",
      label: "FgLinhaUnicaItem",
      name: "FgLinhaUnicaItem",
      typeField: "string",
    },
    {
      field: "FgFechamentoDinheiro",
      label: "FgFechamentoDinheiro",
      name: "FgFechamentoDinheiro",
      typeField: "string",
    },
    {
      field: "FgFechamentoCartao",
      label: "FgFechamentoCartao",
      name: "FgFechamentoCartao",
      typeField: "string",
    },
    {
      field: "FGNT201901",
      label: "FGNT201901",
      name: "FGNT201901",
      typeField: "string",
    },
    {
      field: "FgCdProdutoGrid",
      label: "FgCdProdutoGrid",
      name: "FgCdProdutoGrid",
      typeField: "string",
    },
    {
      field: "FgFonteMaiorGrid",
      label: "FgFonteMaiorGrid",
      name: "FgFonteMaiorGrid",
      typeField: "string",
    },
    {
      field: "FgCPFNota",
      label: "FgCPFNota",
      name: "FgCPFNota",
      typeField: "string",
    },
    {
      field: "FgNFCeDesconectada",
      label: "FgNFCeDesconectada",
      name: "FgNFCeDesconectada",
      typeField: "string",
    },
    {
      field: "FgConfirmaEmissao",
      label: "FgConfirmaEmissao",
      name: "FgConfirmaEmissao",
      typeField: "string",
    },
    {
      field: "FgObrigaPedido",
      label: "FgObrigaPedido",
      name: "FgObrigaPedido",
      typeField: "string",
    },
    {
      field: "FgEnvioSincrono",
      label: "FgEnvioSincrono",
      name: "FgEnvioSincrono",
      typeField: "string",
    },
  ],
};
