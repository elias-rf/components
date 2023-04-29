import { TTableDef } from "@mono/types/model";

export const ConfigConvenio: TTableDef = {
  database: "plano",
  table: "ConfigConvenio",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "Codigo",
      label: "Codigo",
      name: "Codigo",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "FgPermissao",
      label: "FgPermissao",
      name: "FgPermissao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "PercDesconto",
      label: "PercDesconto",
      name: "PercDesconto",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
