import { TTableDef } from "@/types/model";

export const Tecnicos: TTableDef = {
  database: "plano",
  table: "Tecnicos",
  fields: [
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "Tecnicos_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTecnico",
      label: "NmTecnico",
      name: "NmTecnico",
      typeField: "string",
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
  ],
};
