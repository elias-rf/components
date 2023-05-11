import { TTableDef } from "@/types/model";

export const TipFor: TTableDef = {
  database: "plano",
  table: "TipFor",
  fields: [
    {
      field: "CdTipo",
      label: "CdTipo",
      name: "TipFor_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTipo",
      label: "NmTipo",
      name: "NmTipo",
      typeField: "string",
    },
  ],
};
