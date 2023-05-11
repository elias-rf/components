import { TTableDef } from "@/types/model";

export const LiberaAcessos: TTableDef = {
  database: "plano",
  table: "LiberaAcessos",
  fields: [
    {
      field: "CgcCpf",
      label: "CgcCpf",
      name: "LiberaAcessos_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DHLibEmergencia",
      label: "DHLibEmergencia",
      name: "DHLibEmergencia",
      typeField: "string",

      allowNull: false,
    },
  ],
};
