import { TTableDef } from "@/types/model";

export const tbl_Produto_Categoria_Tipo: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto_Categoria_Tipo",
  fields: [
    {
      field: "kCategoriaTipo",
      label: "kCategoriaTipo",
      name: "tbl_Produto_Categoria_Tipo_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CategoriaTipo",
      label: "CategoriaTipo",
      name: "CategoriaTipo",
      typeField: "string",
    },
  ],
};
