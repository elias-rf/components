import { TEntity } from "../../../../types";

export const Pacientes: TEntity = {
  database: "plano",
  table: "Pacientes",
  fields: [
    {
      field: "Domicilio",
      label: "Domicilio",
      name: "Domicilio",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
