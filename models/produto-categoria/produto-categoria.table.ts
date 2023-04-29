import { TTableDef } from "@mono/types";

export const produto_categoria: TTableDef = {
  database: "plano",
  table: "CategPro",
  fields: [
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "produto_categoria_id",
      typeField: "string",
      size: 6,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCategoria",
      label: "NmCategoria",
      name: "categoria",
      typeField: "string",
      size: 30,
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "departamento_id",
      typeField: "int",
      size: 2,
    },
  ],
};
