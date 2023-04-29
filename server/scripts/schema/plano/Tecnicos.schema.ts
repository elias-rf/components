import { TTableDef } from "@mono/types/model";

export const Tecnicos: TTableDef = {
  database: "plano",
  table: "Tecnicos",
  fields: [
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "Tecnicos_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTecnico",
      label: "NmTecnico",
      name: "NmTecnico",
      typeField: "string",
      size: 40,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
    },
  ],
};
