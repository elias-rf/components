import { TTable } from "../../../../types";

export const VendedorMetaProduto: TTable = {
  database: "plano",
  table: "VendedorMetaProduto",
  fields: [
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
