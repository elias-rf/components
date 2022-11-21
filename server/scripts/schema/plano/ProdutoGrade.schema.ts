import { TTable } from "../../../../types";

export const ProdutoGrade: TTable = {
  database: "plano",
  table: "ProdutoGrade",
  fields: [
    {
      field: "CdMestreGrade",
      label: "CdMestreGrade",
      name: "CdMestreGrade",
      type: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 18,
      allowNull: false,
    },
  ],
};
