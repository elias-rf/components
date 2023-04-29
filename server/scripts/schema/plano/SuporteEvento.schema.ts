import { TTableDef } from "@mono/types/model";

export const SuporteEvento: TTableDef = {
  database: "plano",
  table: "SuporteEvento",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
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
      field: "Evento",
      label: "Evento",
      name: "Evento",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
  ],
};
