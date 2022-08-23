import { TEntity } from "@er/types/*";

export const TabBan: TEntity =
  {
  "database": "plano",
  "table": "TabBan",
  "fields": [
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "TabBan_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmBanco",
      "label": "NmBanco",
      "name": "NmBanco",
      "type": "string",
      "size": 50
    },
    {
      "field": "IdEmpresa",
      "label": "IdEmpresa",
      "name": "IdEmpresa",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SiglaEmpresa",
      "label": "SiglaEmpresa",
      "name": "SiglaEmpresa",
      "type": "string",
      "size": 30
    },
    {
      "field": "FgTipoProducao",
      "label": "FgTipoProducao",
      "name": "FgTipoProducao",
      "type": "string",
      "size": 1
    },
    {
      "field": "NmCedente",
      "label": "NmCedente",
      "name": "NmCedente",
      "type": "string",
      "size": 40
    },
    {
      "field": "NumeroContratoCaucao",
      "label": "NumeroContratoCaucao",
      "name": "NumeroContratoCaucao",
      "type": "string",
      "size": 10
    },
    {
      "field": "NumeroConvenio",
      "label": "NumeroConvenio",
      "name": "NumeroConvenio",
      "type": "string",
      "size": 10
    },
    {
      "field": "FgSacador",
      "label": "FgSacador",
      "name": "FgSacador",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgValorMulta",
      "label": "FgValorMulta",
      "name": "FgValorMulta",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercMulta",
      "label": "PercMulta",
      "name": "PercMulta",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "LogoMarcaBanco",
      "label": "LogoMarcaBanco",
      "name": "LogoMarcaBanco",
      "type": "string",
      "size": 128
    }
  ]
}
