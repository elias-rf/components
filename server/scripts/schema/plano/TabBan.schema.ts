import { TTableDef } from "@/types/model";

export const TabBan: TTableDef = {
  database: "plano",
  table: "TabBan",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "TabBan_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmBanco",
      label: "NmBanco",
      name: "NmBanco",
      typeField: "string",
    },
    {
      field: "IdEmpresa",
      label: "IdEmpresa",
      name: "IdEmpresa",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SiglaEmpresa",
      label: "SiglaEmpresa",
      name: "SiglaEmpresa",
      typeField: "string",
    },
    {
      field: "FgTipoProducao",
      label: "FgTipoProducao",
      name: "FgTipoProducao",
      typeField: "string",
    },
    {
      field: "NmCedente",
      label: "NmCedente",
      name: "NmCedente",
      typeField: "string",
    },
    {
      field: "NumeroContratoCaucao",
      label: "NumeroContratoCaucao",
      name: "NumeroContratoCaucao",
      typeField: "string",
    },
    {
      field: "NumeroConvenio",
      label: "NumeroConvenio",
      name: "NumeroConvenio",
      typeField: "string",
    },
    {
      field: "FgSacador",
      label: "FgSacador",
      name: "FgSacador",
      typeField: "string",
    },
    {
      field: "FgValorMulta",
      label: "FgValorMulta",
      name: "FgValorMulta",
      typeField: "string",
    },
    {
      field: "PercMulta",
      label: "PercMulta",
      name: "PercMulta",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LogoMarcaBanco",
      label: "LogoMarcaBanco",
      name: "LogoMarcaBanco",
      typeField: "string",
    },
  ],
};
