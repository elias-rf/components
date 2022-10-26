import { TEntity } from "../../../../types";

export const tProdutoSubCategoria: TEntity = {
  database: "oftalmo",
  table: "tProdutoSubCategoria",
  schema: [
    {
      field: "kSubCategoria",
      label: "kSubCategoria",
      name: "tProdutoSubCategoria_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "SubCategoria",
      label: "SubCategoria",
      name: "SubCategoria",
      type: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 255,
    },
    {
      field: "fkCategoria",
      label: "fkCategoria",
      name: "fkCategoria",
      type: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
