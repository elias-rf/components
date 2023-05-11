import { TTableDef } from "@/types/model";

export const ConfigConvenio: TTableDef = {
  database: "plano",
  table: "ConfigConvenio",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Codigo",
      label: "Codigo",
      name: "Codigo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgPermissao",
      label: "FgPermissao",
      name: "FgPermissao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercDesconto",
      label: "PercDesconto",
      name: "PercDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
