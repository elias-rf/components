import { TTable } from "../../../../types/model";

export const ProdutoGrade: TTable = {
  database: "plano",
  table: "ProdutoGrade",
  fields: [
    {
      field: "CdMestreGrade",
      label: "CdMestreGrade",
      name: "CdMestreGrade",
      typeField: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 18,
      allowNull: false,
    },
  ],
};
