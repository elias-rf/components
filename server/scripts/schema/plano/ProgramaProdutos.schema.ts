import { TTable } from "../../../../types";

export const ProgramaProdutos: TTable = {
  database: "plano",
  table: "ProgramaProdutos",
  fields: [
    {
      field: "CdPrograma",
      label: "CdPrograma",
      name: "CdPrograma",
      type: "int",
      size: 2,
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
  ],
};
