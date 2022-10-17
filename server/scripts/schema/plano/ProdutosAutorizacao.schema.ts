import { TEntity } from "../../../../types";

export const ProdutosAutorizacao: TEntity = {
  database: "plano",
  table: "ProdutosAutorizacao",
  fields: [
    {
      field: "Autorizador",
      label: "Autorizador",
      name: "Autorizador",
      type: "string",
      size: 20,
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
