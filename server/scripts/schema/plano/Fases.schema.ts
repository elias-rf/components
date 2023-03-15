import { TTable } from "../../../../types/model";

export const Fases: TTable = {
  database: "plano",
  table: "Fases",
  fields: [
    {
      field: "CdFase",
      label: "CdFase",
      name: "Fases_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmFase",
      label: "NmFase",
      name: "NmFase",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
