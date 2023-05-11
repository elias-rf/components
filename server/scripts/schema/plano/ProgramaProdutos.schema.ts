import { TTableDef } from "@/types/model";

export const ProgramaProdutos: TTableDef = {
  database: "plano",
  table: "ProgramaProdutos",
  fields: [
    {
      field: "CdPrograma",
      label: "CdPrograma",
      name: "CdPrograma",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
  ],
};
