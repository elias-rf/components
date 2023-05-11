import { TTableDef } from "@/types/model";

export const Defeitos: TTableDef = {
  database: "plano",
  table: "Defeitos",
  fields: [
    {
      field: "CdDefeito",
      label: "CdDefeito",
      name: "Defeitos_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmDefeito",
      label: "NmDefeito",
      name: "NmDefeito",
      typeField: "string",

      allowNull: false,
    },
  ],
};
