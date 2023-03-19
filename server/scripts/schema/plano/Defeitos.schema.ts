import { TTableDef } from "../../../../types/model";

export const Defeitos: TTableDef = {
  database: "plano",
  table: "Defeitos",
  fields: [
    {
      field: "CdDefeito",
      label: "CdDefeito",
      name: "Defeitos_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmDefeito",
      label: "NmDefeito",
      name: "NmDefeito",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
