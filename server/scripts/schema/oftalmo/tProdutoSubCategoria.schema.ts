import { TTableDef } from "@mono/types/model";

export const tProdutoSubCategoria: TTableDef = {
  database: "oftalmo",
  table: "tProdutoSubCategoria",
  fields: [
    {
      field: "kSubCategoria",
      label: "kSubCategoria",
      name: "tProdutoSubCategoria_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "SubCategoria",
      label: "SubCategoria",
      name: "SubCategoria",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 255,
    },
    {
      field: "fkCategoria",
      label: "fkCategoria",
      name: "fkCategoria",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
