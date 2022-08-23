import { TEntity } from "@er/types/*";

export const ConfiguracaoNFe: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoNFe",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "ConfiguracaoNFe_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
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
      "field": "Ambiente",
      "label": "Ambiente",
      "name": "Ambiente",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoImpressao",
      "label": "TipoImpressao",
      "name": "TipoImpressao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoEmissao",
      "label": "TipoEmissao",
      "name": "TipoEmissao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "FinalidadeEmissao",
      "label": "FinalidadeEmissao",
      "name": "FinalidadeEmissao",
      "type": "int",
      "size": 2,
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
      "field": "CaminhoNfe",
      "label": "CaminhoNfe",
      "name": "CaminhoNfe",
      "type": "string",
      "size": 128,
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
      "field": "CSTIPI",
      "label": "CSTIPI",
      "name": "CSTIPI",
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
      "field": "CSTCOFINS",
      "label": "CSTCOFINS",
      "name": "CSTCOFINS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MensagemContingencia",
      "label": "MensagemContingencia",
      "name": "MensagemContingencia",
      "type": "string",
      "size": 256
    },
    {
      "field": "DataHorarioContingencia",
      "label": "DataHorarioContingencia",
      "name": "DataHorarioContingencia",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgConcatenaOBSItemDanfe",
      "label": "FgConcatenaOBSItemDanfe",
      "name": "FgConcatenaOBSItemDanfe",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConcatenaOBSDanfe",
      "label": "FgConcatenaOBSDanfe",
      "name": "FgConcatenaOBSDanfe",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCancelaPorEvento",
      "label": "FgCancelaPorEvento",
      "name": "FgCancelaPorEvento",
      "type": "string",
      "size": 1
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
      "field": "CaminhoCartaCorrecao",
      "label": "CaminhoCartaCorrecao",
      "name": "CaminhoCartaCorrecao",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "VersaoDanfe",
      "label": "VersaoDanfe",
      "name": "VersaoDanfe",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumViasDanfe",
      "label": "NumViasDanfe",
      "name": "NumViasDanfe",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgGeraPDFDanfe",
      "label": "FgGeraPDFDanfe",
      "name": "FgGeraPDFDanfe",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgMultiplasLinhas",
      "label": "FgMultiplasLinhas",
      "name": "FgMultiplasLinhas",
      "type": "string",
      "size": 1
    },
    {
      "field": "SiglaWS",
      "label": "SiglaWS",
      "name": "SiglaWS",
      "type": "string",
      "size": 16
    },
    {
      "field": "FgImprimirTotalImpostoItem",
      "label": "FgImprimirTotalImpostoItem",
      "name": "FgImprimirTotalImpostoItem",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDanfeImprimeLotes",
      "label": "FgDanfeImprimeLotes",
      "name": "FgDanfeImprimeLotes",
      "type": "string",
      "size": 1
    },
    {
      "field": "UTC",
      "label": "UTC",
      "name": "UTC",
      "type": "string",
      "size": 6
    },
    {
      "field": "MensagemEmail",
      "label": "MensagemEmail",
      "name": "MensagemEmail",
      "type": "string",
      "size": 512
    },
    {
      "field": "FGNT201503",
      "label": "FGNT201503",
      "name": "FGNT201503",
      "type": "string",
      "size": 1
    },
    {
      "field": "LimiteHorasCancelamento",
      "label": "LimiteHorasCancelamento",
      "name": "LimiteHorasCancelamento",
      "type": "int",
      "size": 5
    },
    {
      "field": "FgDupMercantil",
      "label": "FgDupMercantil",
      "name": "FgDupMercantil",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgParcelaDup",
      "label": "FgParcelaDup",
      "name": "FgParcelaDup",
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
      "field": "FgTagIPI",
      "label": "FgTagIPI",
      "name": "FgTagIPI",
      "type": "string",
      "size": 1
    }
  ]
}
