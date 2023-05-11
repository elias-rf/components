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

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DsEspecialidade",
      label: "DsEspecialidade",
      name: "DsEspecialidade",
      typeField: "string",

      allowNull: false,
    },
  ],
};
