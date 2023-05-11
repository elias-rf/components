import { TTableDef } from "@/types/model";

export const ComprovanteTRN: TTableDef = {
  database: "plano",
  table: "ComprovanteTRN",
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
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinha",
      label: "NumLinha",
      name: "NumLinha",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",

      allowNull: false,
    },
  ],
};
