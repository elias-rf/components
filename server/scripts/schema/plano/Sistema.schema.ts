import { TEntity } from "../../../../types";

export const Sistema: TEntity = {
  database: "plano",
  table: "Sistema",
  fields: [
    {
      field: "CdSistema",
      label: "CdSistema",
      name: "Sistema_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSistema",
      label: "NmSistema",
      name: "NmSistema",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
