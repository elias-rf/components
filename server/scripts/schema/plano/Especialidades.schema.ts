import { TEntity } from "../../../../types";

export const Especialidades: TEntity = {
  database: "plano",
  table: "Especialidades",
  fields: [
    {
      field: "CdEspecialidade",
      label: "CdEspecialidade",
      name: "Especialidades_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DsEspecialidade",
      label: "DsEspecialidade",
      name: "DsEspecialidade",
      type: "string",
      size: 30,
      allowNull: false,
    },
  ],
};
