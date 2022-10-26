import { TEntity } from "../../../../types";

export const ProdutoGrade: TEntity = {
  database: "plano",
  table: "ProdutoGrade",
  schema: [
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
