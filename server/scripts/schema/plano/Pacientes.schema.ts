import { TTableDef } from "@/types/model";

export const Pacientes: TTableDef = {
  database: "plano",
  table: "Pacientes",
  fields: [
    {
      field: "Domicilio",
      label: "Domicilio",
      name: "Domicilio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      typeField: "string",

      allowNull: false,
    },
  ],
};
