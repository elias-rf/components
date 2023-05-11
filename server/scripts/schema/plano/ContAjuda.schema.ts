import { TTableDef } from "@/types/model";

export const ContAjuda: TTableDef = {
  database: "plano",
  table: "ContAjuda",
  fields: [
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
  ],
};
