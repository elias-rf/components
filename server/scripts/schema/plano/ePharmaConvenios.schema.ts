import { TTableDef } from "@/types/model";

export const ePharmaConvenios: TTableDef = {
  database: "plano",
  table: "ePharmaConvenios",
  fields: [
    {
      field: "CdConvenio",
      label: "CdConvenio",
      name: "ePharmaConvenios_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Nmconvenio",
      label: "Nmconvenio",
      name: "Nmconvenio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Rec",
      label: "Rec",
      name: "Rec",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoConvenio",
      label: "TipoConvenio",
      name: "TipoConvenio",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoPreco",
      label: "TipoPreco",
      name: "TipoPreco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgMenorPreco",
      label: "FgMenorPreco",
      name: "FgMenorPreco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAutorizacao",
      label: "FgAutorizacao",
      name: "FgAutorizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
