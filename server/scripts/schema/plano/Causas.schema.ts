import { TTableDef } from "@mono/types/model";

export const Causas: TTableDef = {
  database: "plano",
  table: "Causas",
  fields: [
    {
      field: "CdCausa",
      label: "CdCausa",
      name: "Causas_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCausa",
      label: "NmCausa",
      name: "NmCausa",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
