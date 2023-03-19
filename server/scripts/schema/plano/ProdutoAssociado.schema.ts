import { TTableDef } from "../../../../types/model";

export const ProdutoAssociado: TTableDef = {
  database: "plano",
  table: "ProdutoAssociado",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Fracao",
      label: "Fracao",
      name: "Fracao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
