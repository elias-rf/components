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

      allowNull: false,
    },
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "CdSegmento",
      typeField: "int",

      allowNull: false,
    },
  ],
};
