import { TTable } from "../../../../types";

export const ProdutoAssistencia: TTable = {
  database: "plano",
  table: "ProdutoAssistencia",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdAssistencia",
      label: "CdAssistencia",
      name: "CdAssistencia",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
