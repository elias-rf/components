import { TTable } from "../../../../types/model";

export const FontePagamento: TTable = {
  database: "plano",
  table: "FontePagamento",
  fields: [
    {
      field: "CdFontePagamento",
      label: "CdFontePagamento",
      name: "FontePagamento_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
