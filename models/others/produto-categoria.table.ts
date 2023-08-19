import { TTableDef } from "@/types";

export const produto_categoria: TTableDef = {
  database: "plano",
  table: "CategPro",
  fields: [
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "produto_categoria_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCategoria",
      label: "NmCategoria",
      name: "categoria",
      typeField: "string",
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "departamento_id",
      typeField: "int",
    },
  ],
};
