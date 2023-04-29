import { TTableDef } from "@mono/types/model";

export const LstTrn: TTableDef = {
  database: "plano",
  table: "LstTrn",
  fields: [
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 1028,
      allowNull: false,
    },
  ],
};
