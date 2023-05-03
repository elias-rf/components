import { TTableDef } from "@/types/model";

export const SegmentosProdutos: TTableDef = {
  database: "plano",
  table: "SegmentosProdutos",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "CdSegmento",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
