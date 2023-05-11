import { TTableDef } from "@/types/model";

export const Formulas: TTableDef = {
  database: "plano",
  table: "Formulas",
  fields: [
    {
      field: "Origem",
      label: "Origem",
      name: "Origem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Destino",
      label: "Destino",
      name: "Destino",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Formula",
      label: "Formula",
      name: "Formula",
      typeField: "string",
    },
  ],
};
