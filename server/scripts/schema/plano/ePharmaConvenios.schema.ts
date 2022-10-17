import { TEntity } from "../../../../types";

export const ePharmaConvenios: TEntity = {
  database: "plano",
  table: "ePharmaConvenios",
  fields: [
    {
      field: "CdConvenio",
      label: "CdConvenio",
      name: "ePharmaConvenios_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Nmconvenio",
      label: "Nmconvenio",
      name: "Nmconvenio",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "Rec",
      label: "Rec",
      name: "Rec",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoConvenio",
      label: "TipoConvenio",
      name: "TipoConvenio",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoPreco",
      label: "TipoPreco",
      name: "TipoPreco",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FgMenorPreco",
      label: "FgMenorPreco",
      name: "FgMenorPreco",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgAutorizacao",
      label: "FgAutorizacao",
      name: "FgAutorizacao",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
