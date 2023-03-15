import { TTable } from "../../../../types/model";

export const Pacientes: TTable = {
  database: "plano",
  table: "Pacientes",
  fields: [
    {
      field: "Domicilio",
      label: "Domicilio",
      name: "Domicilio",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
