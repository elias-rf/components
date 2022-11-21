import { TTable } from "../../../../types";

export const BloqueioPedido: TTable = {
  database: "plano",
  table: "BloqueioPedido",
  fields: [
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
