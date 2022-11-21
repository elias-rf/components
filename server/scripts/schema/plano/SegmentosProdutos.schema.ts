import { TTable } from "../../../../types";

export const SegmentosProdutos: TTable = {
  database: "plano",
  table: "SegmentosProdutos",
  fields: [
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
