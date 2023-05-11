import { TTableDef } from "@/types/model";

export const ProdutoAssistencia: TTableDef = {
  database: "plano",
  table: "ProdutoAssistencia",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdAssistencia",
      label: "CdAssistencia",
      name: "CdAssistencia",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
