import { TEntity } from "../../../../types";

export const tbl_Produto_Categoria_Tipo: TEntity = {
  database: "oftalmo",
  table: "tbl_Produto_Categoria_Tipo",
  schema: [
    {
      field: "kCategoriaTipo",
      label: "kCategoriaTipo",
      name: "tbl_Produto_Categoria_Tipo_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CategoriaTipo",
      label: "CategoriaTipo",
      name: "CategoriaTipo",
      type: "string",
      size: 50,
    },
  ],
};
