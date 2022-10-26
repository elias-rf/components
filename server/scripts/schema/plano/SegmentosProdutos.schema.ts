import { TEntity } from "../../../../types";

export const SegmentosProdutos: TEntity = {
  database: "plano",
  table: "SegmentosProdutos",
  schema: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "CdSegmento",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
