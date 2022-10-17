import { TEntity } from "../../../../types";

export const Defeitos: TEntity = {
  database: "plano",
  table: "Defeitos",
  fields: [
    {
      field: "CdDefeito",
      label: "CdDefeito",
      name: "Defeitos_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmDefeito",
      label: "NmDefeito",
      name: "NmDefeito",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
