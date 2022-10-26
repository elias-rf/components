import { TEntity } from "../../../../types";

export const Fases: TEntity = {
  database: "plano",
  table: "Fases",
  schema: [
    {
      field: "CdFase",
      label: "CdFase",
      name: "Fases_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmFase",
      label: "NmFase",
      name: "NmFase",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
