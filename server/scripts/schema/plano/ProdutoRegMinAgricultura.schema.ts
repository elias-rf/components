import { TTable } from "../../../../types";

export const ProdutoRegMinAgricultura: TTable = {
  database: "plano",
  table: "ProdutoRegMinAgricultura",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoRegMinAgricultura_id",
      type: "string",
      size: 15,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdRegMinAgricAbastec",
      label: "CdRegMinAgricAbastec",
      name: "CdRegMinAgricAbastec",
      type: "string",
      size: 14,
    },
    {
      field: "CdN",
      label: "CdN",
      name: "CdN",
      type: "string",
      size: 2,
    },
    {
      field: "CdP",
      label: "CdP",
      name: "CdP",
      type: "string",
      size: 2,
    },
    {
      field: "CdK",
      label: "CdK",
      name: "CdK",
      type: "string",
      size: 2,
    },
    {
      field: "CdH2O",
      label: "CdH2O",
      name: "CdH2O",
      type: "string",
      size: 2,
    },
  ],
};
