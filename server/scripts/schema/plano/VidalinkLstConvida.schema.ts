import { TTableDef } from "@/types/model";

export const VidalinkLstConvida: TTableDef = {
  database: "plano",
  table: "VidalinkLstConvida",
  fields: [
    {
      field: "Id",
      label: "Id",
      name: "Id",
      typeField: "int",

      autoIncrement: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
    },
  ],
};
