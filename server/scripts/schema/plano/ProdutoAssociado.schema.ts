import { TTableDef } from "@/types/model";

export const ProdutoAssociado: TTableDef = {
  database: "plano",
  table: "ProdutoAssociado",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Fracao",
      label: "Fracao",
      name: "Fracao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
