import { TTableDef } from "@/types/model";

export const FontePagamento: TTableDef = {
  database: "plano",
  table: "FontePagamento",
  fields: [
    {
      field: "CdFontePagamento",
      label: "CdFontePagamento",
      name: "FontePagamento_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
