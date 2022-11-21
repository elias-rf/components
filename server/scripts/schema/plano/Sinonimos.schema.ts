import { TTable } from "../../../../types";

export const Sinonimos: TTable = {
  database: "plano",
  table: "Sinonimos",
  fields: [
    {
      field: "Sinonimo",
      label: "Sinonimo",
      name: "Sinonimo",
      type: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      type: "string",
      size: 15,
      allowNull: false,
    },
  ],
};
