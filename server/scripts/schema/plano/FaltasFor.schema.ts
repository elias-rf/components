import { TEntity } from "../../../../types";

export const FaltasFor: TEntity = {
  database: "plano",
  table: "FaltasFor",
  schema: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdReferencia",
      label: "CdReferencia",
      name: "CdReferencia",
      type: "string",
      size: 15,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
    },
    {
      field: "PrecoV",
      label: "PrecoV",
      name: "PrecoV",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PrecoF",
      label: "PrecoF",
      name: "PrecoF",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};
