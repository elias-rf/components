import { TTableDef } from "@/types/model";

export const ProdutoRegMinAgricultura: TTableDef = {
  database: "plano",
  table: "ProdutoRegMinAgricultura",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoRegMinAgricultura_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdRegMinAgricAbastec",
      label: "CdRegMinAgricAbastec",
      name: "CdRegMinAgricAbastec",
      typeField: "string",
    },
    {
      field: "CdN",
      label: "CdN",
      name: "CdN",
      typeField: "string",
    },
    {
      field: "CdP",
      label: "CdP",
      name: "CdP",
      typeField: "string",
    },
    {
      field: "CdK",
      label: "CdK",
      name: "CdK",
      typeField: "string",
    },
    {
      field: "CdH2O",
      label: "CdH2O",
      name: "CdH2O",
      typeField: "string",
    },
  ],
};
