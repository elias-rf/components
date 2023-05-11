import { TTableDef } from "@/types/model";

export const SuporteEvento: TTableDef = {
  database: "plano",
  table: "SuporteEvento",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Evento",
      label: "Evento",
      name: "Evento",
      typeField: "string",

      allowNull: false,
    },
  ],
};
