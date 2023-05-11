import { TTableDef } from "@/types/model";

export const ConfiguracaoNFe: TTableDef = {
  database: "plano",
  table: "ConfiguracaoNFe",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoNFe_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
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
      typeField: "int",

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
      field: "FinalidadeEmissao",
      label: "FinalidadeEmissao",
      name: "FinalidadeEmissao",
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
      field: "CaminhoNfe",
      label: "CaminhoNfe",
      name: "CaminhoNfe",
      typeField: "string",

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
      field: "CSTIPI",
      label: "CSTIPI",
      name: "CSTIPI",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CSTPIS",
      label: "CSTPIS",
      name: "CSTPIS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CSTCOFINS",
      label: "CSTCOFINS",
      name: "CSTCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MensagemContingencia",
      label: "MensagemContingencia",
      name: "MensagemContingencia",
      typeField: "string",
    },
    {
      field: "DataHorarioContingencia",
      label: "DataHorarioContingencia",
      name: "DataHorarioContingencia",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgConcatenaOBSItemDanfe",
      label: "FgConcatenaOBSItemDanfe",
      name: "FgConcatenaOBSItemDanfe",
      typeField: "string",
    },
    {
      field: "FgConcatenaOBSDanfe",
      label: "FgConcatenaOBSDanfe",
      name: "FgConcatenaOBSDanfe",
      typeField: "string",
    },
    {
      field: "FgCancelaPorEvento",
      label: "FgCancelaPorEvento",
      name: "FgCancelaPorEvento",
      typeField: "string",
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
      field: "CaminhoCartaCorrecao",
      label: "CaminhoCartaCorrecao",
      name: "CaminhoCartaCorrecao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VersaoDanfe",
      label: "VersaoDanfe",
      name: "VersaoDanfe",
      typeField: "string",
    },
    {
      field: "NumViasDanfe",
      label: "NumViasDanfe",
      name: "NumViasDanfe",
      typeField: "int",
    },
    {
      field: "FgGeraPDFDanfe",
      label: "FgGeraPDFDanfe",
      name: "FgGeraPDFDanfe",
      typeField: "string",
    },
    {
      field: "FgMultiplasLinhas",
      label: "FgMultiplasLinhas",
      name: "FgMultiplasLinhas",
      typeField: "string",
    },
    {
      field: "SiglaWS",
      label: "SiglaWS",
      name: "SiglaWS",
      typeField: "string",
    },
    {
      field: "FgImprimirTotalImpostoItem",
      label: "FgImprimirTotalImpostoItem",
      name: "FgImprimirTotalImpostoItem",
      typeField: "string",
    },
    {
      field: "FgDanfeImprimeLotes",
      label: "FgDanfeImprimeLotes",
      name: "FgDanfeImprimeLotes",
      typeField: "string",
    },
    {
      field: "UTC",
      label: "UTC",
      name: "UTC",
      typeField: "string",
    },
    {
      field: "MensagemEmail",
      label: "MensagemEmail",
      name: "MensagemEmail",
      typeField: "string",
    },
    {
      field: "FGNT201503",
      label: "FGNT201503",
      name: "FGNT201503",
      typeField: "string",
    },
    {
      field: "LimiteHorasCancelamento",
      label: "LimiteHorasCancelamento",
      name: "LimiteHorasCancelamento",
      typeField: "int",
    },
    {
      field: "FgDupMercantil",
      label: "FgDupMercantil",
      name: "FgDupMercantil",
      typeField: "string",
    },
    {
      field: "FgParcelaDup",
      label: "FgParcelaDup",
      name: "FgParcelaDup",
      typeField: "string",
    },
    {
      field: "FGNT201901",
      label: "FGNT201901",
      name: "FGNT201901",
      typeField: "string",
    },
    {
      field: "FgTagIPI",
      label: "FgTagIPI",
      name: "FgTagIPI",
      typeField: "string",
    },
  ],
};
