import { TTableDef } from "@/types/model";

export const Sistema: TTableDef = {
  database: "plano",
  table: "Sistema",
  fields: [
    {
      field: "CdSistema",
      label: "CdSistema",
      name: "Sistema_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSistema",
      label: "NmSistema",
      name: "NmSistema",
      typeField: "string",

      allowNull: false,
    },
  ],
};
