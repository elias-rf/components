import { TTableDef } from "@/types/model";

export const tProdutoSubCategoria: TTableDef = {
  database: "oftalmo",
  table: "tProdutoSubCategoria",
  fields: [
    {
      field: "kSubCategoria",
      label: "kSubCategoria",
      name: "tProdutoSubCategoria_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "SubCategoria",
      label: "SubCategoria",
      name: "SubCategoria",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "fkCategoria",
      label: "fkCategoria",
      name: "fkCategoria",
      typeField: "string",

      allowNull: false,
    },
  ],
};
