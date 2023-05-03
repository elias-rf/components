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
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 150,
    },
    {
      field: "Flag",
      label: "Flag",
      name: "Flag",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Controlado",
      label: "Controlado",
      name: "Controlado",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkCategoriaTipo",
      label: "fkCategoriaTipo",
      name: "fkCategoriaTipo",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EhObjetivoVenda",
      label: "EhObjetivoVenda",
      name: "EhObjetivoVenda",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "CategoriaComercial",
      label: "CategoriaComercial",
      name: "CategoriaComercial",
      typeField: "string",
      size: 50,
    },
  ],
};
