import { TTableDef } from "@/types/model";

export const ProdutosAutorizacao: TTableDef = {
  database: "plano",
  table: "ProdutosAutorizacao",
  fields: [
    {
      field: "Autorizador",
      label: "Autorizador",
      name: "Autorizador",
      typeField: "string",

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
