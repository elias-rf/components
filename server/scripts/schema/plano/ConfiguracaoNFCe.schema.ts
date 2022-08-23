import { TEntity } from "@er/types/*";

export const ConfiguracaoNFCe: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoNFCe",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Versao",
      "label": "Versao",
      "name": "Versao",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "SiglaWS",
      "label": "SiglaWS",
      "name": "SiglaWS",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "VersaoQRCode",
      "label": "VersaoQRCode",
      "name": "VersaoQRCode",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "IdToken",
      "label": "IdToken",
      "name": "IdToken",
      "type": "string",
      "size": 6,
      "allowNull": false
    },
    {
      "field": "CSC",
      "label": "CSC",
      "name": "CSC",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "SerieNotaFiscal",
      "label": "SerieNotaFiscal",
      "name": "SerieNotaFiscal",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Ambiente",
      "label": "Ambiente",
      "name": "Ambiente",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "TipoImpressao",
      "label": "TipoImpressao",
      "name": "TipoImpressao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoDanfe",
      "label": "TipoDanfe",
      "name": "TipoDanfe",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoEmissao",
      "label": "TipoEmissao",
      "name": "TipoEmissao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "TempoConsulta",
      "label": "TempoConsulta",
      "name": "TempoConsulta",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CertificadoNfe",
      "label": "CertificadoNfe",
      "name": "CertificadoNfe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "UsuarioNfe",
      "label": "UsuarioNfe",
      "name": "UsuarioNfe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "SenhaNfe",
      "label": "SenhaNfe",
      "name": "SenhaNfe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "ProxyNfe",
      "label": "ProxyNfe",
      "name": "ProxyNfe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "LicencaNfe",
      "label": "LicencaNfe",
      "name": "LicencaNfe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "CaminhoNfe",
      "label": "CaminhoNfe",
      "name": "CaminhoNfe",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "FgGeraPDFDanfe",
      "label": "FgGeraPDFDanfe",
      "name": "FgGeraPDFDanfe",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CaminhoProcNfe",
      "label": "CaminhoProcNfe",
      "name": "CaminhoProcNfe",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "CaminhoPDF",
      "label": "CaminhoPDF",
      "name": "CaminhoPDF",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "FgDanfeImprimeLotes",
      "label": "FgDanfeImprimeLotes",
      "name": "FgDanfeImprimeLotes",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "MensagemEmail",
      "label": "MensagemEmail",
      "name": "MensagemEmail",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "MensagemContingencia",
      "label": "MensagemContingencia",
      "name": "MensagemContingencia",
      "type": "string",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "DataHorarioContingencia",
      "label": "DataHorarioContingencia",
      "name": "DataHorarioContingencia",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "FgConcatenaOBSItemDanfe",
      "label": "FgConcatenaOBSItemDanfe",
      "name": "FgConcatenaOBSItemDanfe",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgConcatenaOBSDanfe",
      "label": "FgConcatenaOBSDanfe",
      "name": "FgConcatenaOBSDanfe",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgCancelaPorEvento",
      "label": "FgCancelaPorEvento",
      "name": "FgCancelaPorEvento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgImprimirTotalImpostoItem",
      "label": "FgImprimirTotalImpostoItem",
      "name": "FgImprimirTotalImpostoItem",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "NumViasDanfe",
      "label": "NumViasDanfe",
      "name": "NumViasDanfe",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumViasDanfeContigencia",
      "label": "NumViasDanfeContigencia",
      "name": "NumViasDanfeContigencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgMultiplasLinhas",
      "label": "FgMultiplasLinhas",
      "name": "FgMultiplasLinhas",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "UTC",
      "label": "UTC",
      "name": "UTC",
      "type": "string",
      "size": 6,
      "allowNull": false
    },
    {
      "field": "LimiteHorasCancelamento",
      "label": "LimiteHorasCancelamento",
      "name": "LimiteHorasCancelamento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "VlAvisoRetirada",
      "label": "VlAvisoRetirada",
      "name": "VlAvisoRetirada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdClientePadrao",
      "label": "CdClientePadrao",
      "name": "CdClientePadrao",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdVendedorPadrao",
      "label": "CdVendedorPadrao",
      "name": "CdVendedorPadrao",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdTipoVendaPadrao",
      "label": "CdTipoVendaPadrao",
      "name": "CdTipoVendaPadrao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "QuantidadePadrao",
      "label": "QuantidadePadrao",
      "name": "QuantidadePadrao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgInicioVenda",
      "label": "FgInicioVenda",
      "name": "FgInicioVenda",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPreVenda",
      "label": "FgPreVenda",
      "name": "FgPreVenda",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPreVendaSimplificada",
      "label": "FgPreVendaSimplificada",
      "name": "FgPreVendaSimplificada",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgImprimeVendedorObs",
      "label": "FgImprimeVendedorObs",
      "name": "FgImprimeVendedorObs",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeCodigoCliente",
      "label": "FgImprimeCodigoCliente",
      "name": "FgImprimeCodigoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgNT201502",
      "label": "FgNT201502",
      "name": "FgNT201502",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgNT201503",
      "label": "FgNT201503",
      "name": "FgNT201503",
      "type": "string",
      "size": 1
    },
    {
      "field": "QuantidadeAlerta",
      "label": "QuantidadeAlerta",
      "name": "QuantidadeAlerta",
      "type": "int",
      "size": 9,
      "scale": 6
    },
    {
      "field": "QuantidadeLimite",
      "label": "QuantidadeLimite",
      "name": "QuantidadeLimite",
      "type": "int",
      "size": 9,
      "scale": 6
    },
    {
      "field": "FgBloqueiaSangria",
      "label": "FgBloqueiaSangria",
      "name": "FgBloqueiaSangria",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExibeAoIniciar",
      "label": "FgExibeAoIniciar",
      "name": "FgExibeAoIniciar",
      "type": "string",
      "size": 1
    },
    {
      "field": "TextoAberturaVenda",
      "label": "TextoAberturaVenda",
      "name": "TextoAberturaVenda",
      "type": "string",
      "size": 32
    },
    {
      "field": "FgLetrasMaiores",
      "label": "FgLetrasMaiores",
      "name": "FgLetrasMaiores",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgOcultaItensKit",
      "label": "FgOcultaItensKit",
      "name": "FgOcultaItensKit",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgOcultaMensagensConfirmacao",
      "label": "FgOcultaMensagensConfirmacao",
      "name": "FgOcultaMensagensConfirmacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeDescontoItem",
      "label": "FgImprimeDescontoItem",
      "name": "FgImprimeDescontoItem",
      "type": "string",
      "size": 1
    },
    {
      "field": "ModeloNotaFiscal",
      "label": "ModeloNotaFiscal",
      "name": "ModeloNotaFiscal",
      "type": "string",
      "size": 3
    },
    {
      "field": "FgPermiteSomenteNumeros",
      "label": "FgPermiteSomenteNumeros",
      "name": "FgPermiteSomenteNumeros",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimirOperadorCaixa",
      "label": "FgImprimirOperadorCaixa",
      "name": "FgImprimirOperadorCaixa",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExibeAltPedido",
      "label": "FgExibeAltPedido",
      "name": "FgExibeAltPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgLinhaUnicaItem",
      "label": "FgLinhaUnicaItem",
      "name": "FgLinhaUnicaItem",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFechamentoDinheiro",
      "label": "FgFechamentoDinheiro",
      "name": "FgFechamentoDinheiro",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFechamentoCartao",
      "label": "FgFechamentoCartao",
      "name": "FgFechamentoCartao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FGNT201901",
      "label": "FGNT201901",
      "name": "FGNT201901",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCdProdutoGrid",
      "label": "FgCdProdutoGrid",
      "name": "FgCdProdutoGrid",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFonteMaiorGrid",
      "label": "FgFonteMaiorGrid",
      "name": "FgFonteMaiorGrid",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCPFNota",
      "label": "FgCPFNota",
      "name": "FgCPFNota",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgNFCeDesconectada",
      "label": "FgNFCeDesconectada",
      "name": "FgNFCeDesconectada",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConfirmaEmissao",
      "label": "FgConfirmaEmissao",
      "name": "FgConfirmaEmissao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigaPedido",
      "label": "FgObrigaPedido",
      "name": "FgObrigaPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEnvioSincrono",
      "label": "FgEnvioSincrono",
      "name": "FgEnvioSincrono",
      "type": "string",
      "size": 1
    }
  ]
}
