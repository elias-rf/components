import { TTable } from "../../../../types/model";

export const VidalinkLstConvida: TTable = {
  database: "plano",
  table: "VidalinkLstConvida",
  fields: [
    {
      field: "Id",
      label: "Id",
      name: "Id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 5040,
    },
  ],
};
