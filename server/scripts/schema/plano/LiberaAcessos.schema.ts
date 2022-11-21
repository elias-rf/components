import { TTable } from "../../../../types";

export const LiberaAcessos: TTable = {
  database: "plano",
  table: "LiberaAcessos",
  fields: [
    {
      field: "CgcCpf",
      label: "CgcCpf",
      name: "LiberaAcessos_id",
      type: "string",
      size: 60,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DHLibEmergencia",
      label: "DHLibEmergencia",
      name: "DHLibEmergencia",
      type: "string",
      size: 60,
      allowNull: false,
    },
  ],
};
