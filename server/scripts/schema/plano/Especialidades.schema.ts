import { TTableDef } from "@/types/model";

export const Especialidades: TTableDef = {
  database: "plano",
  table: "Especialidades",
  fields: [
    {
      field: "CdEspecialidade",
      label: "CdEspecialidade",
      name: "Especialidades_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DsEspecialidade",
      label: "DsEspecialidade",
      name: "DsEspecialidade",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
  ],
};
