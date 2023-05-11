import { TTableDef } from "@/types/model";

export const ContAcesso: TTableDef = {
  database: "plano",
  table: "ContAcesso",
  fields: [
    {
      field: "Base",
      label: "Base",
      name: "Base",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
