import { TEntity } from "@er/types/*";

export const ConfiguracaoNFCeSAT: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoNFCeSAT",
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
      "field": "CodigoVinculacao",
      "label": "CodigoVinculacao",
      "name": "CodigoVinculacao",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "CodigoAtivacao",
      "label": "CodigoAtivacao",
      "name": "CodigoAtivacao",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "CaminhoNfe",
      "label": "CaminhoNfe",
      "name": "CaminhoNfe",
      "type": "string",
      "size": 512,
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
      "size": 512,
      "allowNull": false
    },
    {
      "field": "CaminhoPDF",
      "label": "CaminhoPDF",
      "name": "CaminhoPDF",
      "type": "string",
      "size": 512,
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
      "field": "FgMultiplasLinhas",
      "label": "FgMultiplasLinhas",
      "name": "FgMultiplasLinhas",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "LimiteHorasCancelamento",
      "label": "LimiteHorasCancelamento",
      "name": "LimiteHorasCancelamento",
      "type": "int",
      "size": 5,
      "scale": 1,
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
      "field": "QuantidadeLimite",
      "label": "QuantidadeLimite",
      "name": "QuantidadeLimite",
      "type": "int",
      "size": 9,
      "scale": 6,
      "allowNull": false
    },
    {
      "field": "QuantidadeAlerta",
      "label": "QuantidadeAlerta",
      "name": "QuantidadeAlerta",
      "type": "int",
      "size": 9,
      "scale": 6,
      "allowNull": false
    },
    {
      "field": "NumSerieSAT",
      "label": "NumSerieSAT",
      "name": "NumSerieSAT",
      "type": "string",
      "size": 24
    }
  ]
}
