import { TEntity } from "@er/types/*";

export const Nfe2G: TEntity =
  {
  "database": "plano",
  "table": "Nfe2G",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "FgTipoEmissao",
      "label": "FgTipoEmissao",
      "name": "FgTipoEmissao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "FgTipoAmbiente",
      "label": "FgTipoAmbiente",
      "name": "FgTipoAmbiente",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "SituacaoNfe",
      "label": "SituacaoNfe",
      "name": "SituacaoNfe",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumChave",
      "label": "NumChave",
      "name": "NumChave",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "CodigoNF",
      "label": "CodigoNF",
      "name": "CodigoNF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "DigitoNF",
      "label": "DigitoNF",
      "name": "DigitoNF",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "NumRecibo",
      "label": "NumRecibo",
      "name": "NumRecibo",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "NumProtocolo",
      "label": "NumProtocolo",
      "name": "NumProtocolo",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DtProtocolo",
      "label": "DtProtocolo",
      "name": "DtProtocolo",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtGeracao",
      "label": "DtGeracao",
      "name": "DtGeracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioGeracao",
      "label": "UsuarioGeracao",
      "name": "UsuarioGeracao",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "LocalGeracao",
      "label": "LocalGeracao",
      "name": "LocalGeracao",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "DtAssinatura",
      "label": "DtAssinatura",
      "name": "DtAssinatura",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioAssinatura",
      "label": "UsuarioAssinatura",
      "name": "UsuarioAssinatura",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtEnvio",
      "label": "DtEnvio",
      "name": "DtEnvio",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioEnvio",
      "label": "UsuarioEnvio",
      "name": "UsuarioEnvio",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "TempoMedio",
      "label": "TempoMedio",
      "name": "TempoMedio",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtConfirmacao",
      "label": "DtConfirmacao",
      "name": "DtConfirmacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioConfirmacao",
      "label": "UsuarioConfirmacao",
      "name": "UsuarioConfirmacao",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtProcNfe",
      "label": "DtProcNfe",
      "name": "DtProcNfe",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioProcNfe",
      "label": "UsuarioProcNfe",
      "name": "UsuarioProcNfe",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtEmissaoDanfe",
      "label": "DtEmissaoDanfe",
      "name": "DtEmissaoDanfe",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "UsuarioEmissaoDanfe",
      "label": "UsuarioEmissaoDanfe",
      "name": "UsuarioEmissaoDanfe",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "FgReemissaoDanfe",
      "label": "FgReemissaoDanfe",
      "name": "FgReemissaoDanfe",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "URLQRCode",
      "label": "URLQRCode",
      "name": "URLQRCode",
      "type": "string",
      "size": 1024
    }
  ]
}
