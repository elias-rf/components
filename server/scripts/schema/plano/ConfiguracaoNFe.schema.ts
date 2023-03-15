import { TTable } from "../../../../types/model";

export const ConfiguracaoNFe: TTable = {
  database: "plano",
  table: "ConfiguracaoNFe",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoNFe_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
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
      field: "Ambiente",
      label: "Ambiente",
      name: "Ambiente",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoImpressao",
      label: "TipoImpressao",
      name: "TipoImpressao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoEmissao",
      label: "TipoEmissao",
      name: "TipoEmissao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FinalidadeEmissao",
      label: "FinalidadeEmissao",
      name: "FinalidadeEmissao",
      typeField: "int",
      size: 2,
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
      field: "CaminhoNfe",
      label: "CaminhoNfe",
      name: "CaminhoNfe",
      typeField: "string",
      size: 128,
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
      field: "CSTIPI",
      label: "CSTIPI",
      name: "CSTIPI",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CSTPIS",
      label: "CSTPIS",
      name: "CSTPIS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CSTCOFINS",
      label: "CSTCOFINS",
      name: "CSTCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MensagemContingencia",
      label: "MensagemContingencia",
      name: "MensagemContingencia",
      typeField: "string",
      size: 256,
    },
    {
      field: "DataHorarioContingencia",
      label: "DataHorarioContingencia",
      name: "DataHorarioContingencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgConcatenaOBSItemDanfe",
      label: "FgConcatenaOBSItemDanfe",
      name: "FgConcatenaOBSItemDanfe",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgConcatenaOBSDanfe",
      label: "FgConcatenaOBSDanfe",
      name: "FgConcatenaOBSDanfe",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgCancelaPorEvento",
      label: "FgCancelaPorEvento",
      name: "FgCancelaPorEvento",
      typeField: "string",
      size: 1,
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
      field: "CaminhoCartaCorrecao",
      label: "CaminhoCartaCorrecao",
      name: "CaminhoCartaCorrecao",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "VersaoDanfe",
      label: "VersaoDanfe",
      name: "VersaoDanfe",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumViasDanfe",
      label: "NumViasDanfe",
      name: "NumViasDanfe",
      typeField: "int",
      size: 2,
    },
    {
      field: "FgGeraPDFDanfe",
      label: "FgGeraPDFDanfe",
      name: "FgGeraPDFDanfe",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgMultiplasLinhas",
      label: "FgMultiplasLinhas",
      name: "FgMultiplasLinhas",
      typeField: "string",
      size: 1,
    },
    {
      field: "SiglaWS",
      label: "SiglaWS",
      name: "SiglaWS",
      typeField: "string",
      size: 16,
    },
    {
      field: "FgImprimirTotalImpostoItem",
      label: "FgImprimirTotalImpostoItem",
      name: "FgImprimirTotalImpostoItem",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgDanfeImprimeLotes",
      label: "FgDanfeImprimeLotes",
      name: "FgDanfeImprimeLotes",
      typeField: "string",
      size: 1,
    },
    {
      field: "UTC",
      label: "UTC",
      name: "UTC",
      typeField: "string",
      size: 6,
    },
    {
      field: "MensagemEmail",
      label: "MensagemEmail",
      name: "MensagemEmail",
      typeField: "string",
      size: 512,
    },
    {
      field: "FGNT201503",
      label: "FGNT201503",
      name: "FGNT201503",
      typeField: "string",
      size: 1,
    },
    {
      field: "LimiteHorasCancelamento",
      label: "LimiteHorasCancelamento",
      name: "LimiteHorasCancelamento",
      typeField: "int",
      size: 5,
    },
    {
      field: "FgDupMercantil",
      label: "FgDupMercantil",
      name: "FgDupMercantil",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgParcelaDup",
      label: "FgParcelaDup",
      name: "FgParcelaDup",
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
      field: "FgTagIPI",
      label: "FgTagIPI",
      name: "FgTagIPI",
      typeField: "string",
      size: 1,
    },
  ],
};
