import { TTableDef } from "@/types/model";

export const NfeSe: TTableDef = {
  database: "plano",
  table: "NfeSe",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SituacaoNfe",
      label: "SituacaoNfe",
      name: "SituacaoNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumChave",
      label: "NumChave",
      name: "NumChave",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CodigoNF",
      label: "CodigoNF",
      name: "CodigoNF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DigitoNF",
      label: "DigitoNF",
      name: "DigitoNF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumRecibo",
      label: "NumRecibo",
      name: "NumRecibo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumProtocolo",
      label: "NumProtocolo",
      name: "NumProtocolo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtProtocolo",
      label: "DtProtocolo",
      name: "DtProtocolo",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtGeracao",
      label: "DtGeracao",
      name: "DtGeracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioGeracao",
      label: "UsuarioGeracao",
      name: "UsuarioGeracao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LocalGeracao",
      label: "LocalGeracao",
      name: "LocalGeracao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtAssinatura",
      label: "DtAssinatura",
      name: "DtAssinatura",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioAssinatura",
      label: "UsuarioAssinatura",
      name: "UsuarioAssinatura",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEnvio",
      label: "DtEnvio",
      name: "DtEnvio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioEnvio",
      label: "UsuarioEnvio",
      name: "UsuarioEnvio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TempoMedio",
      label: "TempoMedio",
      name: "TempoMedio",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtConfirmacao",
      label: "DtConfirmacao",
      name: "DtConfirmacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioConfirmacao",
      label: "UsuarioConfirmacao",
      name: "UsuarioConfirmacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtProcNfe",
      label: "DtProcNfe",
      name: "DtProcNfe",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioProcNfe",
      label: "UsuarioProcNfe",
      name: "UsuarioProcNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEmissaoDanfe",
      label: "DtEmissaoDanfe",
      name: "DtEmissaoDanfe",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioEmissaoDanfe",
      label: "UsuarioEmissaoDanfe",
      name: "UsuarioEmissaoDanfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgReemissaoDanfe",
      label: "FgReemissaoDanfe",
      name: "FgReemissaoDanfe",
      typeField: "string",

      allowNull: false,
    },
  ],
};
