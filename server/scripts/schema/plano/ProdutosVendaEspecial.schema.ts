import { TTableDef } from "@mono/types/model";

export const ProdutosVendaEspecial: TTableDef = {
  database: "plano",
  table: "ProdutosVendaEspecial",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
  ],
};
