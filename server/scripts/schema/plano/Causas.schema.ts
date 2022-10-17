import { TEntity } from "../../../../types";

export const Causas: TEntity = {
  database: "plano",
  table: "Causas",
  fields: [
    {
      field: "CdCausa",
      label: "CdCausa",
      name: "Causas_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCausa",
      label: "NmCausa",
      name: "NmCausa",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
