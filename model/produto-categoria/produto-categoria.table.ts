import { TTable } from "../../types";

export const produto_categoria: TTable = {
  database: "plano",
  table: "CategPro",
  fields: [
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "produto_categoria_id",
      type: "string",
      size: 6,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCategoria",
      label: "NmCategoria",
      name: "categoria",
      type: "string",
      size: 30,
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "departamento_id",
      type: "int",
      size: 2,
    },
  ],
};
