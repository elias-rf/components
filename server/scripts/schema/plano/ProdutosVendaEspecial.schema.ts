import { TTableDef } from "@/types/model";

export const ProdutosVendaEspecial: TTableDef = {
  database: "plano",
  table: "ProdutosVendaEspecial",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
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
