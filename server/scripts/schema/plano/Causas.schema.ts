import { TTableDef } from "@/types/model";

export const Causas: TTableDef = {
  database: "plano",
  table: "Causas",
  fields: [
    {
      field: "CdCausa",
      label: "CdCausa",
      name: "Causas_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCausa",
      label: "NmCausa",
      name: "NmCausa",
      typeField: "string",

      allowNull: false,
    },
  ],
};
