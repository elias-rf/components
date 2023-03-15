import { TTable } from "../../../../types/model";

export const ProdutosAutorizacao: TTable = {
  database: "plano",
  table: "ProdutosAutorizacao",
  fields: [
    {
      field: "Autorizador",
      label: "Autorizador",
      name: "Autorizador",
      typeField: "string",
      size: 20,
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
