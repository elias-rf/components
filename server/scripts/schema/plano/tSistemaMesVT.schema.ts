import { TTableDef } from "@/types/model";

export const tSistemaMesVT: TTableDef = {
  database: "plano",
  table: "tSistemaMesVT",
  fields: [
    {
      field: "Dia",
      label: "Dia",
      name: "tSistemaMesVT_id",
      typeField: "date",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MesVT",
      label: "MesVT",
      name: "MesVT",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "Feriado",
      label: "Feriado",
      name: "Feriado",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "ano",
      label: "ano",
      name: "ano",
      typeField: "string",
    },
    {
      field: "mes",
      label: "mes",
      name: "mes",
      typeField: "string",
    },
  ],
};
