import { TTableDef } from "@mono/types/model";

export const ProdutoRegMinAgricultura: TTableDef = {
  database: "plano",
  table: "ProdutoRegMinAgricultura",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoRegMinAgricultura_id",
      typeField: "string",
      size: 15,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdRegMinAgricAbastec",
      label: "CdRegMinAgricAbastec",
      name: "CdRegMinAgricAbastec",
      typeField: "string",
      size: 14,
    },
    {
      field: "CdN",
      label: "CdN",
      name: "CdN",
      typeField: "string",
      size: 2,
    },
    {
      field: "CdP",
      label: "CdP",
      name: "CdP",
      typeField: "string",
      size: 2,
    },
    {
      field: "CdK",
      label: "CdK",
      name: "CdK",
      typeField: "string",
      size: 2,
    },
    {
      field: "CdH2O",
      label: "CdH2O",
      name: "CdH2O",
      typeField: "string",
      size: 2,
    },
  ],
};
