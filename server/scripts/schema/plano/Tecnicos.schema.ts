import { TEntity } from "../../../../types";

export const Tecnicos: TEntity = {
  database: "plano",
  table: "Tecnicos",
  fields: [
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "Tecnicos_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTecnico",
      label: "NmTecnico",
      name: "NmTecnico",
      type: "string",
      size: 40,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      type: "string",
      size: 1,
    },
  ],
};
