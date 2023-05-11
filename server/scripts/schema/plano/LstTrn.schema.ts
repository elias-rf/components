import { TTableDef } from "@/types/model";

export const LstTrn: TTableDef = {
  database: "plano",
  table: "LstTrn",
  fields: [
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",

      allowNull: false,
    },
  ],
};
