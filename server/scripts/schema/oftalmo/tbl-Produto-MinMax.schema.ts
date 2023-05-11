import { TTableDef } from "@/types/model";

export const tbl_Produto_MinMax: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto_MinMax",
  fields: [
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "tbl_Produto_MinMax_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Minimo",
      label: "Minimo",
      name: "Minimo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Media",
      label: "Media",
      name: "Media",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Maximo",
      label: "Maximo",
      name: "Maximo",
      typeField: "int",

      allowNull: false,
    },
  ],
};
