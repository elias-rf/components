import { TEntity } from "../../../../types";

export const SuporteEvento: TEntity = {
  database: "plano",
  table: "SuporteEvento",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Evento",
      label: "Evento",
      name: "Evento",
      type: "string",
      size: 512,
      allowNull: false,
    },
  ],
};
