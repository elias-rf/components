import { TTableDef } from "@/types/model";

export const tbl_produto_categoria: TTableDef = {
  database: "oftalmo",
  table: "tbl_produto_categoria",
  fields: [
    {
      field: "kCategoria",
      label: "kCategoria",
      name: "tbl_produto_categoria_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "Flag",
      label: "Flag",
      name: "Flag",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Controlado",
      label: "Controlado",
      name: "Controlado",
      typeField: "int",

      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkCategoriaTipo",
      label: "fkCategoriaTipo",
      name: "fkCategoriaTipo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EhObjetivoVenda",
      label: "EhObjetivoVenda",
      name: "EhObjetivoVenda",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "CategoriaComercial",
      label: "CategoriaComercial",
      name: "CategoriaComercial",
      typeField: "string",
    },
  ],
};
