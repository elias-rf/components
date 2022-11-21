import { TTable } from "../../../../types";

export const tSistemaMesVT: TTable = {
  database: "plano",
  table: "tSistemaMesVT",
  fields: [
    {
      field: "Dia",
      label: "Dia",
      name: "tSistemaMesVT_id",
      type: "date",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MesVT",
      label: "MesVT",
      name: "MesVT",
      type: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "Feriado",
      label: "Feriado",
      name: "Feriado",
      type: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "ano",
      label: "ano",
      name: "ano",
      type: "string",
      size: 4,
    },
    {
      field: "mes",
      label: "mes",
      name: "mes",
      type: "string",
      size: 2,
    },
  ],
};
