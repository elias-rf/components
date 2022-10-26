import { TEntity } from "../../../../types";

export const ProdutosVendaEspecial: TEntity = {
  database: "plano",
  table: "ProdutosVendaEspecial",
  schema: [
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
  ],
};
