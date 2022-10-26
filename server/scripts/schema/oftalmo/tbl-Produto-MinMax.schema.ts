import { TEntity } from "../../../../types";

export const tbl_Produto_MinMax: TEntity = {
  database: "oftalmo",
  table: "tbl_Produto_MinMax",
  schema: [
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "tbl_Produto_MinMax_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Minimo",
      label: "Minimo",
      name: "Minimo",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Media",
      label: "Media",
      name: "Media",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Maximo",
      label: "Maximo",
      name: "Maximo",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
