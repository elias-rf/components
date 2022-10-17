import { TEntity } from "../../../../types";

export const ProdutoBloqueioFilial: TEntity = {
  database: "plano",
  table: "ProdutoBloqueioFilial",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
