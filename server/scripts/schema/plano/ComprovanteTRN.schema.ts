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
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinha",
      label: "NumLinha",
      name: "NumLinha",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
